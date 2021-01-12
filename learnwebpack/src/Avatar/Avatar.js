import pic from './iShot2021-01-12 16.09.01.jpg';
import './Avatar.scss';
export const Avatar = () => {
    const AvatarDOM = document.createElement('div');
    AvatarDOM.id = "Avatar";
    const Pic = new Image();
    Pic.src = pic;
    AvatarDOM.appendChild(Pic);
    const RootDOM = document.getElementById('root');
    RootDOM.appendChild(AvatarDOM);
};
