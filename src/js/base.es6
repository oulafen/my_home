const $ = require('jquery');
const Base = function(){};

Base.initNav = function(){

};

Base.scrollHide = function(scrollpane, target) {
    var prevScroll = 0,
        current = 'down',
        previous = 'up',
        distance = $(target).height();
    $(scrollpane).scroll(function(){
        if (($(this).scrollTop() >= prevScroll + 10) && $(this).scrollTop() > distance) {
            current = 'down';
            if (current != previous) {
                $(target).css({ top: '-'+ (distance + 10) +'px' });
                previous = current;
            }
        }
        else if ($(this).scrollTop() < prevScroll - 5) {
            current = 'up';
            if (current != previous) {
                $(target).css({ top: '0px' });
                previous = current;
            }
        }
        prevScroll = $(this).scrollTop();
    });
};


export default Base;



