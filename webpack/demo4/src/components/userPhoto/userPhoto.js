import './userPhoto.scss';
import car from './car.jpg'
export default () => {
    let img = new Image();
    img.src = car;
    let pic = document.createElement('div');
    pic.id = 'userPhoto';
    pic.appendChild(img);
    document.getElementById('root').appendChild(pic);
}