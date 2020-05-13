import './button.scss'

export default function Button(text = '按钮') {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.id = 'button';
    const app = document.getElementById('app');
    app.appendChild(button);
}