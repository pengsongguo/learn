import style from './index.scss'
import pic from './pic.jpg'

export default function userPhoto() {
    // 创建一个头像容器
    const photo_DOM = document.createElement('div');
    photo_DOM.className = style.user;
    //创建图片
    const pic_DOM = new Image();
    pic_DOM.src = `dist/${pic}`;
    console.log(pic);
    pic_DOM.className = style.photo
    photo_DOM.appendChild(pic_DOM)

    const root_DOM = document.getElementById('root');
    root_DOM.appendChild(photo_DOM)

}