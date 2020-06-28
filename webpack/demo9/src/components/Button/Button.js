import './button.css'

export default (n=1) => {
    let button = document.createElement('button');
    button.classList.add('button');
    button.innerText=`按钮${n}`;
    let root = document.getElementById('root');
    root.appendChild(button);
}