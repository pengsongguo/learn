import './button.css'

export const Button = (n = 1) => {
    let Button = document.createElement('button');
    Button.innerText = `按钮${n}`;
    Button.className = 'button';
    const root = document.getElementById('root');
    root.append(Button);
};

export default Button;