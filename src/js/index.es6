import '../css/style_index.scss';
import './font_size.js';
import Base from './base.es6';
const $ = require('jquery');


$(document).ready(function() {
    $('.J-nav').on('click', () => {
        var isOpen = $('body').hasClass('navpane-is-open');
        isOpen ? $('body').removeClass('navpane-is-open') : $('body').addClass('navpane-is-open');
    });

    Base.scrollHide(window, ".header");
});