[toc]

> 声明：此文参照官方文档整理，仅用于学习参考     
> React 版本：16.13.1

# 介绍

React 是一个用于构建用户界面的 JavaScript 库。

## React 特点

1. 声明式设计：React 采用声明范式，可以轻松描述应用。
2. 高效：React 通过对 DOM 的模拟，最大限度地减少与 DOM 的交互。
3. 灵活：React 可以与已知的库或框架很好地配合。
4. JSX：JSX 是 JavaScript 语法的扩展。
5. 组件：通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6. ==单向响应的数据流==：React  实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

---

# 安装使用

React 库可以有多种安装使用方式。

- CND 库引入
- npm 安装
- create-react-app 脚手架工具（推荐）

## 使用 create-react-app 快速构建 React 开发环境

create-react-app 是来自于 Facebook 的脚手架工具，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

```
$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

---

# 元素渲染

元素是构成 React 应用的最小单位，它用于描述屏幕上输出的内容。

```
const element = <h1>Hello, world!</h1>
```

## 将元素渲染到 DOM 中

React 开发应用时一般只会定义一个根节点。但如果你是在一个已有的项目当中引入 React 的话，你可能会需要在不同的部分单独定义 React 根节点。

将 React 元素渲染到根 DOM 节点中，通过把它们都传递给 `ReactDOM.render()` 的方法来将其渲染到页面上：

```
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

## 更新元素渲染

==React 元素都是不可变的。当元素被创建之后，你是无法改变其内容或属性的。==

目前更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法。

除了函数外还可以创建一个 `React.Component` 的 ES6 类，该类封装了要展示的元素，需要注意的是在 `render()` 方法中，需要使用 `this.props` 替换 `props`。

==React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。==

---

# JSX

React 使用 JSX 来替代常规的 JavaScript。

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

项目中不需要一定使用 JSX，但它有以下优点：

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

```
const element = <h1>Hello, world!</h1>;
```

推荐在 React 中使用 JSX 来描述用户界面。

JSX 是在 JavaScript 内部实现的。

元素是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。

与浏览器的 DOM 元素不同，==React 当中的元素事实上是普通的对象，React DOM 可以确保浏览器 DOM 的数据内容与 React 元素保持一致。==

要将 React 元素渲染到根 DOM 节点中，通过把它们都传递给 `ReactDOM.render()` 的方法来将其渲染到页面上。

```
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement,document.getElementById('example'));
```

==由于 JSX 就是 JavaScript，一些标识符像 `class` 和 `for`，不建议作为 XML 属性名。作为替代，React DOM 使用 `className` 和 `htmlFor` 来做对应的属性。==

## 自定义属性 

在代码中==嵌套多个 HTML 标签，需要使用一个 div 元素包裹它==，实例中的 `p` 元素添加了自定义属性 `data-myattribute`，添加自定义属性需要使用 `data-` 前缀。

```
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    <h2>欢迎学习 React</h2>
    <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
    ,
    document.getElementById('example')
);
```

## 表达式

在 JSX 中使用 JavaScript 表达式。表达式写在花括号 `{}` 中。实例如下：

```
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

在 JSX 中==不能使用 `if else` 语句，但可以使用 `conditional (三元运算)`== 表达式来替代。以下实例中如果变量 `i` 等于 `1` 浏览器将输出 `true`, 如果修改 `i` 的值，则会输出 `false`。

```JavaScript
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

## 样式

React 推荐使用内联样式。可以使用 `camelCase（小驼峰）` 语法来设置内联样式。 React 会在指定元素数字后自动添加 `px` 。以下实例演示了为 `h1` 元素添加 `myStyle` 内联样式：

```JavaScript
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

## 注释

注释需要写在花括号中。

```JavaScript
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```

## 数组

JSX 允许在模板中插入数组，==数组会自动展开所有成员。==

```JavaScript
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

---

# 组件

封装一个输出 "Hello World！" 的组件，组件名为 `HelloMessage`：

```JavaScript
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
 
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

可以使用函数定义了一个组件：

```JavaScript
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
```

也可以使用 ES6 `class` 来定义一个组件:

```JavaScript
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

用户自定义的组件:

```JavaScript
const element = <HelloMessage /> 
```

原生 HTML 元素名以小写字母开头，而自定义的 React 类名==以大写字母开头==，比如 `HelloMessage` 不能写成 `helloMessage`。除此之外还需要注意==组件类只能包含一个顶层标签==，否则也会报错。

## 复合组件

可以通过创建多个组件来合成一个组件，即把组件的不同功能点进行分离。

```JavaScript
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}

function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```

---

# state

React 把组件看成是一个状态机（State Machines）。==通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。==

React 里，==只需更新组件的 `state`，然后根据新的 `state` 重新渲染用户界面（不要操作 DOM）。==

## Clock 案例

```JavaScript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

![Clock页面效果图](https://inews.gtimg.com/newsapp_ls/0/12098739435/0)

调用顺序：

1. 当 `<Clock />` 被传给 `ReactDOM.render()` 的时候，React 会调用 `Clock` 组件的构造函数。因为 `Clock` 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 `this.state`。我们会在之后更新 `state`。
2. 之后 React 会调用组件的 `render()` 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 `Clock` 渲染的输出。
3. 当 `Clock` 的输出被插入到 DOM 中后，React 就会调用 `ComponentDidMount()` 生命周期方法。在这个方法中，`Clock` 组件向浏览器请求设置一个计时器来每秒调用一次组件的 `tick()` 方法。
4. 浏览器每秒都会调用一次 `tick()` 方法。 在这方法之中，`Clock` 组件会通过调用 `setState()` 来计划进行一次 UI 更新。得益于 `setState()` 的调用，React 能够知道 `state` 已经改变了，然后会重新调用 `render()` 方法来确定页面上该显示什么。这一次，`render()` 方法中的 `this.state.date` 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
5. 一旦 `Clock` 组件从 DOM 中被移除，React 就会调用 `componentWillUnmount()` 生命周期方法，这样计时器就停止了。

## 不要直接修改 state

例如，此代码不会重新渲染组件：

```JavaScript
// Wrong
this.state.comment = 'Hello';
```

而是应该使用 `setState()`。

```
// Correct
this.setState({comment: 'Hello'});
```
==构造函数是唯一可以给 `this.state` 赋值的地方。==

## state 的更新可能是异步的

出于性能考虑，==React 可能会把多个 `setState()` 调用合并成一个调用。==

因为 `this.props` 和 `this.state` 可能会异步更新，所以不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器：

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 `state` 作为第一个参数，将此次更新被应用时的 `props` 做为第二个参数：

```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

上面使用了箭头函数，不过使用普通的函数也同样可以：

```
// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

## state 的更新会被合并

当调用 `setState()` 的时候，React 会把提供的对象合并到当前的 `state`。

例如,`state` 包含几个独立的变量：

```
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

然后可以分别调用 `setState()` 来单独地更新它们：

```
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

这里的合并是浅合并，所以 `this.setState({comments})` 完整保留了 `this.state.posts`， 但是完全替换了 `this.state.comments`。

## 数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 `class` 组件。

这就是为什么称 `state` 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

==这通常会被叫做“自上而下”或是“单向”的数据流。任何的 `state` 总是所属于特定的组件，而且从该 `state` 派生的任何数据或 UI 只能影响树中“低于”它们的组件。==

如果你把一个以组件构成的树想象成一个 `props` 的数据瀑布的话，那么每一个组件的 `state` 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

---

# props

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 `“props”`。

例如，这段代码会在页面上渲染 `“Hello, Sara”`：

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
这个例子中发生了什么：

1. 调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 `props` 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。

## props 只读性

==`state` 和 `props` 主要的区别在于 `props` 是不可变的，而 `state` 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 `state` 来更新和修改数据。 而子组件只能通过 `props` 来传递数据。==

## 默认 props

通过组件类的 `defaultProps` 属性为 `props` 设置默认值，实例如下：

```JavaScript
React 实例
class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
 
HelloMessage.defaultProps = {
  name: 'Runoob'
};
 
const element = <HelloMessage/>;
 
ReactDOM.render(
  element,
  document.getElementById('example')
);
```

## props 验证

`React.PropTypes` 在 React v15.5 版本后已经移到了 `prop-types` 库。

```
<script src="https://cdn.bootcss.com/prop-types/15.6.1/prop-types.js"></script>
```

`Props` 验证使用 `propTypes`，它可以保证我们的应用组件被正确使用，`React.PropTypes` 提供很多验证器 (validator) 来验证传入数据是否有效。当向 `props` 传入无效数据时，JavaScript 控制台会抛出警告。

```JavaScript
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

---

# 条件渲染

常用与运算符 `&&` 和三元运算符进行条件组件的渲染。

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```
---

# 列表 & Keys

通常使用 `map()` 方法来渲染列表组件数据。

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

需要在每个列表元素分配一个 `key` 属性。==`key` 帮助 React 识别哪些元素改变了，比如被添加或删除。==

一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，使用数据中的 `id` 来作为元素的 `key`。当元素没有确定 `id` 的时候，万不得已可以使用元素索引 `index` 作为 `key`。如果列表项目的顺序可能会变化，不建议使用索引来用作 `key` 值，因为这样做会导致性能变差，还可能引起组件状态的问题。

React 使用 `key` 来匹配原有树上的子元素以及最新树上的子元素，提升效率。

---

# 组件 API

React 的组件 API 常用有：

- 设置状态：`setState`
- 强制更新：`forceUpdate`

## setState()

```
setState(object nextState[, function callback])
```

### 参数

- `nextState`，将要设置的新状态，该状态会和当前的 `state` 合并;
- `callback`，可选参数，回调函数。该函数会在 `setState` 设置成功，且组件重新渲染后调用。

合并 `nextState` 和当前 `state`，并重新渲染组件。`setState` 是 React 事件处理函数中和请求回调函数中触发 UI 更新的主要方法。

### 注意点

- 不能在组件内部通过 `this.state` 修改状态，因为该状态会在调用 `setState()` 后被替换。
- `setState()` 并不会立即改变 `this.state`，而是创建一个即将处理的 `state`。
- `setState()` 并不一定是同步的，为了提升性能 React 会批量执行 `state` 和 DOM 渲染。
- `setState()` 总是会触发一次组件重绘，除非在 `shouldComponentUpdate()` 中实现了一些条件渲染逻辑。

## forceUpdate()

```
component.forceUpdate(callback)
```

默认情况下，当组件的 `state` 或 `props` 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染。

调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。如果标记发生变化，React 仍将只更新 DOM。

通常应该避免使用 `forceUpdate()`，尽量在 `render()` 中使用 `this.props` 和 `this.state`。

---

# 组件生命周期

每个组件都包含“生命周期方法”，可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。

组件的生命周期可分成三个状态和一个错误处理：

- Mounting（挂载）：已插入真实 DOM
- Updating（更新）：正在被重新渲染
- Unmounting（卸载）：已移出真实 DOM
- 错误处理：执行过程中发生错误

## 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

注意，下述方法即将过时，在新代码中应该避免使用它们：

- `UNSAFE_componentWillMount()`

### constructor()

```
constructor(props)
```

如果不初始化 `state` 或不进行方法绑定，则不需要为 React 组件实现构造函数。

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 `bug`。

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 `this.state` 赋值对象来初始化内部 `state`
- 为事件处理函数绑定实例

在 `constructor()` 函数中不要调用 `setState()` 方法。如果组件需要使用内部 `state`，请直接在构造函数中为 `this.state` 赋值初始 `state`：

```
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

只能在构造函数中直接为 `this.state` 赋值。如需在其他方法中赋值，你应使用 `this.setState()` 替代。

### static getDerivedStateFromProps()

```
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 `render` 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 `state`，如果返回 `null` 则不更新任何内容。

此方法适用于罕见的用例，即 `state` 的值在任何时候都取决于 `props`。

### render()

```
render()
```

`render()` 方法是 class 组件中唯一必须实现的方法。

当 `render` 被调用时，它会检查 `this.props` 和 `this.state` 的变化并返回以下类型之一：

- React 元素。通常通过 JSX 创建。例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件，无论是 `<div />` 还是 `<MyComponent />`  均为 React 元素。
- 数组或 `fragments`。 使得 `render` 方法可以返回多个元素。
- Portals。可以渲染子节点到不同的 DOM 子树中。
- 字符串或数值类型。它们在 DOM 中会被渲染为文本节点。
- 布尔类型或 `null`。什么都不渲染。（主要用于支持返回 `test && <Child />` 的模式，其中 `test` 为布尔类型)

`render()` 函数应该为纯函数，这意味着在不修改组件 `state` 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。

如需与浏览器进行交互，请在 `componentDidMount()` 或其他生命周期方法中执行你的操作。保持 `render()` 为纯函数，可以使组件更容易思考。

注意：如果 `shouldComponentUpdate()` 返回 `false`，则不会调用 `render()`。

### componentDidMount()

```
componentDidMount()
```

`componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

## 更新

当组件的 `props` 或 `state` 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

注意，下述方法即将过时，在新代码中应该避免使用它们：

- `UNSAFE_componentWillUpdate()`
- `UNSAFE_componentWillReceiveProps()`

### static getDerivedStateFromProps()

用法同挂载中的同名方法相同。

### shouldComponentUpdate()

```
shouldComponentUpdate(nextProps, nextState)
```

根据 `shouldComponentUpdate()` 的返回值，判断 React 组件的输出是否受当前 `state` 或 `props` 更改的影响。默认行为是 `state` 每次发生变化组件都会重新渲染。大部分情况下，应该遵循默认行为。

此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 `PureComponent` 组件，而不是手动编写 `shouldComponentUpdate()`。`PureComponent` 会对 `props` 和  `state` 进行浅层比较，并减少了跳过必要更新的可能性。

### render()

用法同挂载中的同名方法相同。

### getSnapshotBeforeUpdate()

```
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。此用法并不常见。

### componentDidUpdate()

```
componentDidUpdate(prevProps, prevState, snapshot)
```

`componentDidUpdate()`  会在更新后会被立即调用。首次渲染不会执行此方法。

当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 `props` 进行了比较，也可以选择在此处进行网络请求。（例如，当 `props` 未发生变化时，则不会执行网络请求）。

```
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

你也可以在 `componentDidUpdate()` 中直接调用 `setState()`，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 `props` “镜像”给 `state`，请考虑直接使用 `props`。

注意：如果 `shouldComponentUpdate()` 返回值为 `false`，则不会调用 `componentDidUpdate()`。

## 卸载

当组件从 DOM 中移除时会调用如下方法：

- `componentWillUnmount()`

### componentWillUnmount()

```
componentWillUnmount()
```

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 `timer`，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等。

`componentWillUnmount()` 中不应调用 `setState()`，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。

## 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

1. static getDerivedStateFromError()
2. componentDidCatch()

---

# 过时的生命周期方法

以下生命周期方法标记为“过时”。这些方法仍然有效，但不建议在新代码中使用它们。

## UNSAFE_componentWillMount()

```
UNSAFE_componentWillMount()
```

注意：此生命周期之前名为  `componentWillMount`。该名称将继续使用至 React 17。

`UNSAFE_componentWillMount()` 在挂载之前被调用。它在 `render()` 之前调用，因此在此方法中同步调用 `setState()` 不会触发额外渲染。通常，==建议使用 `constructor()` 来初始化 `state`。==

## UNSAFE_componentWillReceiveProps()

```
UNSAFE_componentWillReceiveProps(nextProps)
```

注意：此生命周期之前名为  `componentWillReceiveProps`。该名称将继续使用至 React 17。

## UNSAFE_componentWillUpdate()

```
UNSAFE_componentWillUpdate(nextProps, nextState)
```
注意：此生命周期之前名为 `componentWillUpdate`。该名称将继续使用至 React 17。

---

# AJAX/数据请求

React 组件的数据可以通过 `componentDidMount` 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 `state` 中，再用 `this.setState` 方法重新渲染 UI。

发送ajax请求的几种方式：

- JQuery：一般不用，太重，不是专事专做
- axios: `axios.get(url)`
- fetch: `fetch(url)`

---

# 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 `state`。例如这个纯 HTML 表单只接受一个名称：

```
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。如果你在 React 中执行相同的代码，它依然有效。但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。

## 受控组件

在 HTML 中，表单元素（如`<input>、 <textarea>` 和 `<select>`）之类的表单元素通常自己维护 `state`，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 `state` 属性中，并且只能通过使用 `setState()` 来更新。

使 React 的 `state` 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

## 处理多个输入

当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作。

```
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

---

# 事件

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

传统的 HTML：

```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

在 React 中略微不同：

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

## 阻止默认行为

React 不能通过返回 `false` 的方式阻止默认行为。必须显式的使用 `preventDefault` 。例如，传统的 HTML 中阻止链接默认打开一个新页面，可以这样写：

```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

在 React 中：

```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

`e` 是一个合成事件。React 根据 W3C 规范来定义这些合成事件，所以不需要担心跨浏览器的兼容性问题。

## this 问题

须谨慎对待 JSX 回调函数中的 `this`，在 JavaScript 中，`class` 的方法默认不会绑定 `this`。如果忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当调用这个函数的时候 `this` 的值为 `undefined`。

这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果没有在方法后面添加 `()`，例如 `onClick={this.handleClick}`，应该为这个方法绑定 `this`。

## this 的绑定

### 初始化绑定

可以在 `constructor` 初始化阶段，统一对函数的 `this` 进行绑定。

```
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <input onChange={this.handleInputChange} />
      </form>
    );
  }
}
```

### 调用时绑定

也可以手动进行调用时绑定。

```
class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
          <input onChange={this.handleInputChange.bind(this)} />
      </form>
    );
  }
}
```

### 箭头函数绑定

也可以在回调中使用箭头函数。

```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

此语法问题在于每次渲染 `LoggingButton` 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 `prop` 传入子组件时，这些组件可能会进行额外的重新渲染。==通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。==

### 实验性的 public class fields 语法

可以使用 class fields 正确的绑定回调函数：

```
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

## 向事件处理程序传递参数

通常会为事件处理函数传递额外的参数。例如，若 `id` 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过箭头函数和 `Function.prototype.bind` 来实现。

在这两种情况下，React 的事件对象 `e`  会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 `bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。

---

# React Refs

React 支持一个特殊的、可以附加到任何组件上的 `ref` 属性。此属性可以是一个由 `React.createRef()` 函数创建的对象、或者一个回调函数、或者一个字符串（遗留 API）。当 `ref` 属性是一个回调函数时，此函数会（根据元素的类型）接收底层 DOM 元素或 `class` 实例作为其参数。这能够让你直接访问 DOM 元素或组件实例。

谨慎使用 `ref`，建议使用自上而下的数据流。

## 过时 API：String 类型的 Refs

之前的 API 中的 `string` 类型的 `ref` 属性，例如 `"textInput"`。可以通过 `this.refs.textInput` 来访问 DOM 节点。不建议使用它，因为 `string` 类型的 `refs` 存在 一些问题。它已过时并可能会在未来的版本被移除。

```
React 实例
class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.textInput.focus();
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="textInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
```

但是这种用法已经过时，不再推荐使用。

## 正确用法

在典型的 React 数据流中，`props` 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 `props` 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。



下面是几个适合使用 `refs` 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

### 创建 Refs

`Refs` 是使用 `React.createRef()` 创建的，并通过 `ref` 属性附加到 React 元素。在构造组件时，通常将 `Refs` 分配给实例属性，以便可以在整个组件中引用它们。

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### 访问 Refs

当 `ref` 被传递给 `render` 中的元素时，对该节点的引用可以在 `ref` 的 `current` 属性中被访问。

```
const node = this.myRef.current;
```