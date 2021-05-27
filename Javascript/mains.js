"use strict";


var stickymenu = document.getElementById("navMenu")
var stickymenuoffset = stickymenu.offsetTop

window.addEventListener("scroll", function (e) {
    requestAnimationFrame(function () {
        if (window.pageYOffset > stickymenuoffset) {
            stickymenu.classList.add('sticky')
        } else {
            stickymenu.classList.remove('sticky')
        }
    })
})


$(function () {

    //Scroll event
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.go-top').fadeIn('slow');
        if (scrolled < 200) $('.go-top').fadeOut('slow');
    });

    //Click event
    $('.go-top').click(function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });

});



(function () {

    let hamburger = {
        nav: document.querySelector('#nav'),
        navToggle: document.querySelector('.nav-toggle'),

        initialize() {
            this.navToggle.addEventListener('click', () => { this.toggle(); });
        },

        toggle() {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },
    };

    hamburger.initialize();

}());


function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        toggle.classList.add('hide-btn')
    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide-btn')
    }
}




// Profile Image upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var fileurl = e.target.result;
            $('.profile-pic').attr('src', fileurl);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".file-upload").on('change', function () {
    readURL(this);
});
$(".upload-button").on('click', function () {
    $(".file-upload").click();
});





