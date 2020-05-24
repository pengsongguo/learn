import './Button.scss'

const Button = (text = '按钮1') => {
    const btn = document.createElement('button');
    btn.innerHTML = text;
    btn.id = "Button";
    document.getElementById('root').appendChild(btn);
};

export {Button}