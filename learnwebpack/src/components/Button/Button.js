import './Button.css';
export const Button = (text = '按钮') => {
    const BtnDOM = document.createElement('button');
    BtnDOM.innerText = text;
    document.getElementById('root').appendChild(BtnDOM);
};