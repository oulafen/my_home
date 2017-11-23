import '../css/_base.scss';
import '../css/style_index.scss';
import './font_size.js';
import Base from './base.es6';
const $ = require('jquery');
import Swiper from './plugin/swiper.min.js';



$(document).ready(function() {
    Base.initNav();

    Base.scrollHide(window, ".header");

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });
});