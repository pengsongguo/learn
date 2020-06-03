import Swiper from 'swiper';
import './banner1.scss'


export default () => {
    const root_DOM = document.getElementById('root');
    const DOM1 = document.createElement('div');
    let tmp = `<div id="banner1">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591196351768&di=2f87f41ddf047d764e0ca2573177394a&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201310%2F19%2F235356fyjkkugokokczyo0.jpg" alt="">
</div>
        <div class="swiper-slide">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591196351768&di=0a978c2db56c2c12bfae324b46d3b9e1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F58b0f41ad200b.jpg" alt="">
</div>
        <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591196351767&di=5fa85baeb42d338e037b3b060439a96a&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201406%2F22%2F082448e35qi3z4n94ej83j.jpg" alt=""></div>
    </div>

</div>`
    root_DOM.appendChild(DOM1);
    DOM1.innerHTML = tmp;

    var mySwiper = new Swiper('#banner1', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
    });
}