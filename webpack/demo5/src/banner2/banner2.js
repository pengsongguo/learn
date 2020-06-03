import Swiper from 'swiper';
import './banner2.scss'


export default () => {
    const root_DOM = document.getElementById('root');
    const DOM1 = document.createElement('div');


    let tmp = `<div id="banner2">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591198397107&di=ada88dbbde99fc7129fd82e7411ef6ae&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F90%2Fsh%2FQJ8803090964.jpg" alt="">
</div>
        <div class="swiper-slide">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591198397107&di=885c647bd13283fe930134e736376212&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F18%2F91%2F01300000165476121457919064223.jpg" alt="">
</div>
        <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591198397103&di=fce2d513829df527fef7ce8353c11d09&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F09fa513d269759ee1ead5f2db4fb43166c22df52.jpg" alt=""></div>
    </div>

</div>`

    root_DOM.appendChild(DOM1);
    DOM1.innerHTML = tmp;

    var mySwiper = new Swiper('#banner2', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
    });
}