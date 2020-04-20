import pic from './pic1.jpeg'
import './index.scss'
export default function userPhoto() {
    const pic_DOM = document.createElement('div');
    pic_DOM.className = 'pic-container';
    const userPhoto_DOM = document.createElement('img');
    userPhoto_DOM.src = `${pic}`;
    pic_DOM.appendChild(userPhoto_DOM);
    const root_DOM = document.getElementById('root');
    root_DOM.appendChild(pic_DOM);
}