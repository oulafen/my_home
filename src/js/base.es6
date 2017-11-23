const $ = require('jquery');
const Base = function () {
};

Base.initNav = () => {
    $('.J-nav').on('click', () => {
        var isOpen = $('body').hasClass('navpane-is-open');
        isOpen ? $('body').removeClass('navpane-is-open') : $('body').addClass('navpane-is-open');
    });
};

Base.scrollHide = (scrollpane, target) => {
    var prevScroll = 0,
        current = 'down',
        previous = 'up',
        distance = $(target).height();
    $(scrollpane).scroll(function () {
        if (($(this).scrollTop() >= prevScroll + 10) && $(this).scrollTop() > distance) {
            current = 'down';
            if (current != previous) {
                $(target).css({top: '-' + (distance + 10) + 'px'});
                previous = current;
            }
        }
        else if ($(this).scrollTop() < prevScroll - 5) {
            current = 'up';
            if (current != previous) {
                $(target).css({top: '0px'});
                previous = current;
            }
        }
        prevScroll = $(this).scrollTop();
    });
};

Base.browser = (() => {
    let a = navigator.userAgent;
    return {
        trident: a.indexOf("Trident") > -1,
        presto: a.indexOf("Presto") > -1,
        webKit: a.indexOf("AppleWebKit") > -1,
        gecko: a.indexOf("Gecko") > -1 && a.indexOf("KHTML") == -1,
        mobile: !!a.match(/AppleWebKit.*Mobile.*/),
        ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
        weixin: a.indexOf("MicroMessenger") > -1,
        qq: " qq" == a.match(/\sQQ/i)
    }
})();


export default Base;



