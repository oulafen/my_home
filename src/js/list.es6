import '../css/_base.scss';
import '../css/style_list.scss';

import './font_size.js';
import Base from './base.es6';
const $ = require('jquery');

$(function () {
    Base.initNav();
    Base.scrollHide(window, '.header');

    $('[data-action="imgQRCodeCtrl"]')
        .hover(function() {
            !Base.browser.mobile && $(this).find('.qr-code').css({
                'height': ( $(this).find('.img').height() + 2 ) + 'px',
                'opacity': 1,
                'z-index': 1
            });
        }, function(){
            $(this).find('.qr-code').css({'opacity': 0, 'z-index': -1});
        })
        .click(function() {
            if(Base.browser.mobile){
                location.href = $(this).data('href')
            }
        });
});


