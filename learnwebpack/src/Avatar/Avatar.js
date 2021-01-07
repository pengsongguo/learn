import pic from './iShot2021-01-07 18.15.19.jpg';
import './Avatar.scss';

export const Avatar = () => {
    let Avatar = document.createElement('div');
    Avatar.innerHTML = `<div id="Avatar">
    <img src=${pic}>
    </div>`;
    let Root = document.getElementById('root');
    Root.appendChild(Avatar);
};