import './index.css'

export default function btn(id = 1) {
    const button_DOM = document.createElement('button');
    // button_DOM.id = `btn${id}`;
    button_DOM.innerText = `按钮${id}`;
    button_DOM.className = 'btn';
    const root_DOM = document.getElementById('root');
    root_DOM.appendChild(button_DOM);
}
