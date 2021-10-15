强制让页面滚动到页面的某个 DOM 元素的位置
有时候为了解决键盘遮挡，或者弹框遮挡，页面不会自动上移等问题，可以使用 ele.scrollIntoView( ) 强制让页面滚动到指定元素 DOM 。

//底部键盘遮挡bug修复，键盘触发焦点
FN_inputOnFocus(eleId) {
    this.bfscrolltop = document.body.scrollTop;//获取软键盘唤起前浏览器滚动部分的高度
    let ele = document.getElementById(eleId)
    setTimeout(() => {
        ele.scrollIntoView(true);   //el为input元素
    }, 100)
}
检测用户页面是否返回
const backListener = (callback) => {
    let listenerFn = () =>{
        //callback返回值 ：是否允许页面回退 true允许 false 阻止
        if(typeof callback === "function"&&callback()){
            window.history.back();
        }else{
            window.history.pushState('forward', null, '#');
            window.history.forward(1);
        }  
    }
    if (window.history && window.history.pushState) {
        window.addEventListener('popstate', listenerFn, false);
        window.history.pushState('forward', null, '#');
        window.history.forward(1);
    }
    //调用返回的函数取消监听popstate事件
    return () => {
        window.removeEventListener("popstate", listenerFn, false)
    }
}
防止手机上左右滑动和手机手势冲突
 -webkit-overflow-scrolling: touch;
placeholder字体颜色大小设置
::-webkit-input-placeholder { /* WebKit browsers */
  color: #999;
  font-size: 16px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #999;
  font-size: 16px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #999;
  font-size: 16px;
}
input 字体颜色，光标颜色设置
input{
    color: red;/*输入文字、光标颜色*/
    -webkit-text-fill-color: blue;/*输入文字、placeholder颜色*/
    caret-color: yellow;/*光标颜色*/
}
去除滚动条
xx 设置了 overflow:scroll 属性点元素。

xx::-webkit-scrollbar {
        display: none;
        }
手机横竖屏判断
// 屏幕旋转监听
var getOrientation = function () {
    // 整个背景大容器
    const DOM_28 = $('#jr-jiaYiXian #DOM_28');
    if (window.orientation === -90 || window.orientation === 90) {
        // 横屏
        DOM_28.removeClass('bg-A')
        DOM_28.addClass('bg-B')
    }

    if (window.orientation === 0) {
        // 竖屏
        DOM_28.removeClass('bg-B')
        DOM_28.addClass('bg-A')
    }

    let _width = $(window).width();
    let _height = $(window).height();
    if (_height > _width) {
        // 竖屏
        DOM_28.removeClass('bg-B')
        DOM_28.addClass('bg-A')
    } else {
        // 横屏
        DOM_28.removeClass('bg-A')
        DOM_28.addClass('bg-B')
    }
};

getOrientation();
$(document).ready(function () {
    window.onresize = function () {
        // 微信切换横竖屏时有延时可能导致数据错误，故多次调用
        var count = 10;
        var interval = setInterval(function () {
            if (count > 0) {
                getOrientation();
            } else {
                clearInterval(interval);
            }
            count--;
        }, 15);
    };
    window.onorientationchange = function () {
        // 微信切换横竖屏时有延时可能导致数据错误，故多次调用
        var count = 10;
        var interval = setInterval(function () {
            if (count > 0) {
                getOrientation();
            } else {
                clearInterval(interval);
            }
            count--;
        }, 15);
    };
});
超出3行省略号。。。
overflow: hidden;
text-overflow: -o-ellipsis-lastline;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
line-clamp: 3;
-webkit-box-orient: vertical;
实时滚动监听某个元素是否划 出/入 屏幕
 //滚动监听某个元素是否划 出/入 屏幕
  isOffScreen(eleID) {
    // 获取元素
    const ele = document.querySelector(`#${eleID}`);

    window.onscroll = function () {
      if (ele) {
        // 坐标对象
        const offset = ele.getBoundingClientRect();
        const offsetTop = offset.top;
        const offsetBottom = offset.bottom;
        const offsetHeight = offset.height;
        // 进入可视区域
        if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
          console.log('进入可视区域');
          // do something...
        } else {
          console.log('移出可视区域');
          // do something...
        }
      }
    }
  }
  
  this.isOffScreen('test')
  
监听大小屏幕、手机/PC布局切换
  TOOL_autoRedirect() {
       let w = parseInt(window.screen.width);
       let daPing = w > 960 ? true : false;
       if (daPing) {
           document.getElementsByTagName('html')[0].style['font-size'] = 75 + 'px';
       }

       //说明在大屏上了，改一下页面的样式布局
       this.setState({
           daPing
       })
   };
这个方法需要页面加载完调用，以及屏幕尺寸发生变化的时候，频繁调用。

this.TOOL_autoRedirect();
window.onresize = this.TOOL_autoRedirect();