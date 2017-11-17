import '../css/style_list.scss';
import './font_size.js';
import Base from './base.es6';
const $ = require('jquery');

$(function(){
    Base.initNav();
    Base.scrollHide(window, '.header');
});

