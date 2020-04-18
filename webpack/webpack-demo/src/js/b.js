import pic1 from './../imgs/pic1.jpg'

export default function B() {
    // 创建了一个 B 元素
    const DOM_B = document.createElement('img')
    // 将 B 元素 id 设置为 b
    DOM_B.id = 'b'
    // A 元素内容设置
    DOM_B.src = pic1
    //
    const DOM_root = document.getElementById('root')
    DOM_root.appendChild(DOM_B)
}