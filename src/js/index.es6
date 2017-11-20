import '../css/_base.scss';
import '../css/style_index.scss';
import './font_size.js';
import Base from './base.es6';
const $ = require('jquery');


$(document).ready(function() {
    Base.initNav();

    Base.scrollHide(window, ".header");
});