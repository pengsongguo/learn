import './banner.scss';
import pic1 from './imgs/fengjing1.jpeg';
import pic2 from './imgs/fengjing2.jpeg';
import pic3 from './imgs/fengjing3.jpeg';
import pic4 from './imgs/fengjing4.jpeg';
import pic5 from './imgs/fengjing5.jpeg';
import pic6 from './imgs/fengjing6.jpeg';
import pic7 from './imgs/fengjing7.jpg';
import pic8 from './imgs/fengjing8.jpeg';
import pic9 from './imgs/fengjing9.jpeg';
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
                                <div class="swiper-slide">
                                    <img src=${pic4}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic5}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic6}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic7}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic8}>
                                </div>
                                <div class="swiper-slide">
                                    <img src=${pic9}>
                                </div>
                            </div>
                        </div>`;

    document.getElementById('root').appendChild(swiper);

    new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
    })

}