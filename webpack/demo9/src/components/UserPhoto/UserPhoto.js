import './UserPhoto.scss';
import pic from './default.jpeg'

export const UserPhoto = (src = pic) => {
    let user = document.createElement('div');
    user.classList.add('user');
    let photo = new Image();
    photo.src = `${src}`;
    photo.classList.add('photo');
    user.appendChild(photo);
    let root = document.getElementById('root');
    root.appendChild(user);
};