import './button.css'

export const Button = (value = '1') => {
    let btn = document.createElement('button');
    btn.id = 'button';
    btn.innerHTML = `按钮${value}`;
    let root = document.getElementById('root');
    root.appendChild(btn);
};