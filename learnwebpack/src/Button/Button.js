import './Button.css'
export const Button = (txt = '按钮') => {
    let Button = document.createElement('button');
    Button.innerText = txt;
    Button.id = "Button";
    let Root = document.getElementById('root');
    Root.appendChild(Button);
};