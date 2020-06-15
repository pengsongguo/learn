import './userPhoto.scss';
import moren from './moren.jpg'

const userPhoto = (src = moren) => {
    let userPhoto = document.createElement('div');
    userPhoto.className = 'userPhoto';
    let pic = new Image();
    pic.src = `${src}`;
    userPhoto.appendChild(pic);
    const root = document.getElementById('root');
    root.appendChild(userPhoto);
};

export default userPhoto;