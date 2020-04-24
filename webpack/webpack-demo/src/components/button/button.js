import './index.css'

function button() {
    const btn_DOM = document.createElement('button');
    btn_DOM.setAttribute('id', 'btn');
    btn_DOM.className='btn';
    btn_DOM.innerText = '按钮';
    conso.log('123');
    const root_DOM = document.getElementById('root');
    root_DOM.appendChild(btn_DOM);
}

export default button;

