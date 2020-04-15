const button_DOM = document.createElement('button');
button_DOM.id = 'button';
button_DOM.innerText = '我是个按钮';
const root_DOM = document.getElementById('root');
root_DOM.appendChild(button_DOM);