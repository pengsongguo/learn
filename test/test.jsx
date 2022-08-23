import React from 'react'
import "./TreeDirectory.scss"
import NewFileButton from "../../../../components/NewFileButton/NewFileButton";
import {browsing, fileDirectoryList} from "../../../../api/teamPlaceHome";
import {_U} from "@auto/fe-work-tools/js/utils";
import {Spin, Tree, Tooltip} from "antd";
import NoData from "../../../../components/NoData";
import FileExtendButton from "../../../../components/FileExtendButton/FileExtendButton";
import PubSub from "pubsub-js";
import PS from "../../../../pubSubStore";
import store from "store";


export default class TreeDirectory extends React.Component {
    state = {
        libraryFolderId: _U.getUrlParam('libraryFolderId'),//当前文库ID
        libraryScope: _U.getUrlParam('libraryScope'),//根文库scope
        libraryApiCode: _U.getUrlParam('libraryApiCode'),//根文库apicode
        libraryAuthority: store.get('libraryAuthority'),//根文库权限
        loading: false,
        treeData: [],//目录树结构数据
        expandedKeys: [],//目录展开状态的记录
        loadedKeys: [],//（受控）已经加载的节点，需要配合 loadData 使用
        onSelectKey: [],//选中节点记录
        currentFileFolderId: '',//当前选择的文件、文件夹id，用来防止重复点击用的
        currentNode: null,//当前树节点
        parentNode: null,//当前树节点的父节点
    }


    componentDidMount() {
        let _this = this;
        // 订阅-团队空间左侧的主菜单
        PubSub.subscribe(PS.teamPlaceHomeMenu, (msg, data) => {
            if (data === 'home' || data === 'member') {
                //选中首页或者成员，左侧树不能选中
                this.API_fileDirectoryList()
            } else if (data === 'folder') {

            }
            //将当前选中菜单埋入本地
            store.set('currentMenu', data)
        })

        // 默认获取根文件夹目录（树结构初次渲染，永远获取的是根库的folderId）
        this.API_fileDirectoryList()

        //订阅-本地树数据更新(树形结构)
        PubSub.subscribe(PS.onSelectTreeData, (msg, data) => {
            if (store.get('currentMenu') === 'home') {
                //说明当前操作的是文库，需要重新加载当前页面
                window.location.reload()
            } else {

                _this.setState({
                    loadedKeys: []
                }, () => {
                    console.log(_this.state.parentNode);
                    console.log(_this.state.currentNode);
                    _this.onLoadData(_this.state.parentNode, true)
                    // this.API_fileDirectoryList()
                })
            }
        })
    }


    //知识库获取文件夹的列表信息
    API_fileDirectoryList() {
        let {libraryFolderId, libraryApiCode} = this.state;
        this.setState({
            treeData: [],//目录树结构数据
            expandedKeys: [],//目录展开状态的记录
            loadedKeys: [],//（受控）已经加载的节点，需要配合 loadData 使用
            onSelectKey: [],//选中节点记录
            currentFileFolderId: '',//当前选择的文件、文件夹id，用来防止重复点击用的
            currentNode: null,//当前树节点
            parentNode: null,//当前树节点的父节点
            loading: false,
        }, () => {
            fileDirectoryList({
                offset: 0,
                limit: 999,
                folderId: libraryFolderId,
                filterUser: 1,
                apiCode: libraryApiCode,
                libId: libraryFolderId,
                isShare: 0
            }).then(res => {
                if (res.code === 10000 && res.data && res.data.list) {
                    let list = res.data.list
                    this.setState({
                        treeData: list.length > 0 ? this.createTreeData(list, 0) : []
                    })
                }
            }).finally(() => {
                this.setState({
                    loading: false
                })
            })

        })
    }

    // 改造接口数据，用于树形目录所需的数据结构
    createTreeData = (list, key) => {
        // 将原始数据，改造为tree所需的title、key、children
        let treeData = [];
        if (list && list.length) {
            list.forEach((v, i) => {
                treeData.push({
                    key: `${key}-${i}`,
                    title: <div className={`file-item`}>
                        <img src={v.icon} className="icon"/>
                        {/*{v.name.length > 12 ? <Tooltip placement="topRight" title={v.name}>*/}
                        {/*    <span className="name"*/}
                        {/*          style={{width: `${180 - calWidth(`${key}-${i}`) * 24}px`}}>{v.name}</span>*/}
                        {/*</Tooltip> : <span className="name"*/}
                        {/*                   style={{width: `${180 - calWidth(`${key}-${i}`) * 24}px`}}>{v.name}</span>}*/}
                        <span className="name"
                              style={{width: `${180 - calWidth(`${key}-${i}`) * 24}px`}}>{v.name}</span>
                        <div className="file-handle">
                            {/*这里显示传入的空的btns，目的是为了让子组件自行去抓取btns列表*/}
                            <FileExtendButton currentFile={v} btns={[]}/>
                            {/*新建这个动作，只能在文件夹出现*/}
                            {/*公司资料-非管理员-无新建、无导入、无分享*/}
                            {this.state.libraryScope === '4' && this.state.libraryAuthority !== 8 ? null : (v.isFolder === 1 && v.id &&
                                <NewFileButton folderId={v.id} scope={v.scope} iconType={2}/>)}
                        </div>
                    </div>,
                    isLeaf: v.isThreaf,//是否是根节点，下面还有没有文件
                    apiCode: v.apiCode || '',
                    isFolder: v.isFolder,
                    id: v.id,
                    name: v.name,//文件名称
                    creatorName: v.creatorName,//文件创建人
                    scope: v.scope,
                    webUrl: v.webUrl,
                    parentId: v.parentId,//父的ID
                    children: v.children
                })
            })
        }

        //计算目录的层级宽度
        function calWidth(str) {
            return str.split('-').length - 1
        }


        return treeData;
    }


    // 递归循环生成嵌套treedata
    updateTreeData = (list, key, children) => list.map((node) => {
        if (node.key === key) {
            return {...node, children};
        }

        if (node.children && node.children.length > 0) {
            return {...node, children: this.updateTreeData(node.children, key, children)};
        }
        return node;
    });


    //展开当前树(加载当前文件夹下的文件)
    onLoadData = (currentFile, falg) => {

        let _this = this,
            key = currentFile.key,
            origin = _this.state.treeData,
            folderId = currentFile.id,
            apiCode = currentFile.apiCode;
        return new Promise((resolve) => {

            fileDirectoryList({
                offset: 0,
                limit: 999,
                folderId,
                filterUser: 1,
                apiCode,
                libId: _this.state.libraryFolderId,
                isShare: 0
            }).then(res => {
                if (res.code === 10000 && res.data && res.data.list && res.data.list.length > 0) {
                    let list = res.data.list;
                    _this.setState({
                        treeData: _this.updateTreeData(origin, key, _this.createTreeData(list, key)),
                        loading: false
                    }, () => {
                        // 加载完成后选中当前的文件
                        falg && _this.fileSelect([key], {node: currentFile})
                        resolve();
                    })
                }
            }).finally(() => {
                this.setState({
                    loading: false
                })
            })

        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    //节点加载完毕时触发
    onLoad = (loadedKeys) => {
        this.setState({loadedKeys})
    }

    //展开节点
    onExpand = (keys, item) => {
        const {expandedKeys, loadedKeys} = this.state;

        let newLoadKeys = loadedKeys
        // 判断当前是展开还是收起节点，当前展开的长度比之前的少，说明是收起。
        if (item.expanded) {
            //展开
            this.setState({
                expandedKeys: keys,
                loadedKeys: newLoadKeys
            }, () => {
                //操作展开关闭谁，选中谁，选中最后操作展开的项
                this.fileSelect([item.node.key], item)
            })
        } else {
            // 收起
            // 当是收起的时候，把这个收起的节点从loadedKeys中移除
            let e = []
            expandedKeys.map((v, i) => {
                if (v.startsWith(item.node.key)) {

                } else {
                    e.push(v)
                }
            })
            let l = []
            loadedKeys.map((v, i) => {
                if (v.startsWith(item.node.key)) {

                } else {
                    l.push(v)
                }
            })
            this.setState({
                expandedKeys: e,
                loadedKeys: l
            }, () => {
                //操作展开关闭谁，选中谁，选中最后操作展开的项
                this.fileSelect([item.node.key], item)
            })
        }

        // if (expandedKeys.length > keys.length) {
        //     //  当是收起的时候，把这个收起的节点从loadedKeys中移除
        //     newLoadKeys = loadedKeys.filter((i) => keys.includes(i))
        // }
        // this.setState({
        //     expandedKeys: keys,
        //     loadedKeys: newLoadKeys
        // }, () => {
        //     //操作展开关闭谁，选中谁，选中最后操作展开的项
        //     this.fileSelect([item.node.key], item)
        // })
    }

    // 最近浏览接口，用于实时跟接口同步的操作，记录用户浏览了啥
    API_browsing(file) {
        browsing({
            folderId: file.id,//文件组id
            "fid": file.id,//文件id
            "fileName": file.name,//文件名称
            "fileCreateUser": file.creatorName,//文件创建人
            "type": 0,//0代表普通文件 1代表文件夹
            "scope": file.scope
        }).then(res => {
            // console.log(res);
        })
    }

    //文件选择
    fileSelect = (key, item) => {
        let curFile = item.node;//当前文件
        let isFolder = curFile.isFolder;
        let currentFileFolderId = this.state.currentFileFolderId;
        if (currentFileFolderId === curFile.id) {
            //说明点击的是同一个文件，不做任何操作
        } else {
            if (key.length > 0) {
                this.setState({
                    onSelectKey: key,
                    currentFileFolderId: curFile.id,
                    currentNode: item.node,
                    parentNode: {
                        id: curFile.parentId,
                        apiCode: curFile.apiCode,//父类的apiCode，这里子父永远都一样
                        key: key[0].split('-').slice(0, -1).join('-')
                    }
                }, () => {
                    // console.log('父-', key[0].split('-').slice(0, -1).join('-'), this.state.parentNode);
                    // console.log('自己-', key, this.state.currentNode);
                    // 发布-当前选中的文件、文件夹、文库简单信息
                    PubSub.publish(PS.currentFileFolderInfo, {
                        id: curFile.id,
                        scope: curFile.scope
                    })
                })

                if (isFolder === 1) {
                    // 表示点了文件夹
                    // 发布-团队空间左侧的主菜单
                    PubSub.publish(PS.teamPlaceHomeMenu, 'folder')
                } else if (isFolder === 0) {
                    // 表示点了文件
                    // 发布-团队空间左侧的主菜单
                    PubSub.publish(PS.teamPlaceHomeMenu, 'file')
                    //最近浏览接口，用于实时跟接口同步的操作，记录用户浏览了啥
                    this.API_browsing(curFile)
                    // 发布-文件预览的URL地址
                    PubSub.publish(PS.iframeUrl, `${curFile.webUrl}?k=${_U.readCookie('APP_KNOWLEDGE_ltK')}`)
                }
            }
        }
    }


    render() {
        const {
            loading,
            treeData,
            expandedKeys,
            onSelectKey,
            libraryScope,
            libraryFolderId,
            libraryAuthority,
            loadedKeys,
        } = this.state
        return (
            <div id="TreeDirectory">
                <div className="directory-title">目录
                    {libraryScope === '6' || (libraryScope === '4' && libraryAuthority !== 8) ? null :
                        libraryFolderId && <NewFileButton folderId={libraryFolderId} scope={libraryScope}
                                                          iconType={2}/>}
                </div>
                {loading ? <Spin size="large" style={{display: 'block', margin: '20vh auto'}}/> : <>
                    {treeData && treeData.length > 0 ? <div className="directory-list">
                        <Tree
                            treeData={treeData}
                            expandedKeys={expandedKeys}
                            onExpand={this.onExpand}
                            onSelect={this.fileSelect}
                            selectedKeys={onSelectKey}
                            loadData={this.onLoadData}
                            onLoad={this.onLoad}
                            loadedKeys={loadedKeys}
                            defaultExpandParent={false}
                            selectable
                        />
                    </div> : <div style={{margin: '10px auto', textAlign: 'center'}}>
                        <NoData tipWord={'暂无内容'}/>
                        {libraryScope === '6' || (libraryScope === '4' && libraryAuthority !== 8) ? null :
                            libraryFolderId && <NewFileButton folderId={libraryFolderId} scope={libraryScope}
                                                              iconType={1}/>}
                    </div>}
                </>}
            </div>
        );
    }
}


