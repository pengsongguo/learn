import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class List extends Component {
    state={
        list:[]
    }
    componentDidMount() {
        PubSub.subscribe('list',(msg,data)=>{
            this.setState({
                list:data
            })
        })
    }

    render() {
        const {list} = this.state
        return (
            <div>
                {list && list.length > 0 ? <ul>
                    {list.map((v, i) =>
                        <li key={v.id} style={{display: 'inline-block', width: '200px', margin: '10px'}}>
                            <img style={{display: 'block', width: '200px'}} src={v.avatar_url} alt=""/>
                            <span>{v.login}</span>
                        </li>
                    )}
                </ul> : <span>无数据</span>}
            </div>
        );
    }
}

export default List;