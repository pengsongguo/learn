import Pic from './iShot2021-01-17 14.58.36.jpg';
import './Avatar.scss';
export const Avatar = () => {
    const AvatarDOM = document.createElement('div');
    AvatarDOM.id = "Avatar";
    let picDOM = new Image();
    picDOM.src = Pic;
    AvatarDOM.appendChild(picDOM);
    const rootDOM = document.getElementById('root');
    rootDOM.appendChild(AvatarDOM);
};