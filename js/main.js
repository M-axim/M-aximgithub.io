"use strict";
jQuery(document).ready(function () {
    jQuery('.menu__icon').click(function (event) {
        jQuery('.menu__icon, .menu__body, .header').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
});
var menuBG = document.querySelector('.header');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset;
    if (scrollTop >= 125) {
        menuBG.classList.add('bg');
    }
    else {
        menuBG.classList.remove('bg');
    }
});
// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Функция пролистывания
jQuery(document).ready(function () {
    jQuery('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top - 115
        }, 1000);
    });
});