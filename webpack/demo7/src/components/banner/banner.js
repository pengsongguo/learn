import './banner.scss';
import pic1 from './imgs/fengjing1.jpeg';
import pic2 from './imgs/fengjing2.jpeg';
import pic3 from './imgs/fengjing3.jpeg';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';


export default () => {
    let swiper = document.createElement('div');
    swiper.innerHTML = `<div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src=${pic1}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic2}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic3}>
                                </div>
                            </div>
                        </div>`;

    document.getElementById('root').appendChild(swiper);

    new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
    })

}