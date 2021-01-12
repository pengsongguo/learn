import './Button.css';

export const Button = (text = 1) => {
    const ButtonDOM = document.createElement('button');
    ButtonDOM.innerHTML = `按钮${text}`;
    ButtonDOM.id = "Button";
    const RootDOM = document.getElementById('root');
    RootDOM.appendChild(ButtonDOM);
};