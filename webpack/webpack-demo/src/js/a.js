export default function A() {
    // 创建了一个 A 元素
    const DOM_A = document.createElement('div')
    // 将 A 元素 id 设置为 a
    DOM_A.id = 'a'
    // A 元素内容设置
    DOM_A.innerText = '我是A'
    // 设置类名
    DOM_A.className='color-bg'
    const DOM_root = document.getElementById('root')
    DOM_root.appendChild(DOM_A)
}