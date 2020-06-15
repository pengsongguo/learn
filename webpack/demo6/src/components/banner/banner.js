import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './banner.scss';

const Banner = () => {
    let swiper = `<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592223602374&di=e535bda0ada46a67280cf896c2863e92&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F180818%2F4-1PQQ51A6.jpg"></div>
        <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592223625817&di=1fdd14e995043853f73a77f856318816&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1797395336%2C1100210360%26fm%3D214%26gp%3D0.jpg"></div>
        <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592223602369&di=5d65a786554beaac667d49123fbf8a3f&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F160707%2F4-160FG50511.jpg"></div>
    </div>
</div>`;
    let root = document.getElementById('root');
    let swiperDOM = document.createElement('div');
    swiperDOM.className = 'swiperDOM';
    swiperDOM.innerHTML = swiper;
    if (root) {
        root.appendChild(swiperDOM);
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
        })
    }
};

export default Banner;