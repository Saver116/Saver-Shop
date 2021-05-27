"use strict";

$('.single-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            arrows: false,
        }
    }
    ]
});



$('.single-item-two').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },

    ]
});

$('.single-item-main').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rows: 2,
    responsive: [{
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            arrows: false,
        }
    }
    ]
});


$(function () {

    // Main wrapper
    $(".main-box-one").mouseover(function () {
        $(".main-cart-1").css("visibility", "visible")
        $(".main-price-one").css("visibility", "hidden")
    });

    $(".main-box-one").mouseout(function () {
        $(".main-cart-1").css("visibility", "hidden")
        $(".main-price-one").css("visibility", "visible")

    });

    $(".main-box-two").mouseover(function () {
        $(".main-cart-2").css("visibility", "visible")
        $(".main-price-two").css("visibility", "hidden")
    });

    $(".main-box-two").mouseout(function () {
        $(".main-cart-2").css("visibility", "hidden")
        $(".main-price-two").css("visibility", "visible")

    });

    $(".main-box-three").mouseover(function () {
        $(".main-cart-3").css("visibility", "visible")
        $(".main-price-three").css("visibility", "hidden")
    });

    $(".main-box-three").mouseout(function () {
        $(".main-cart-3").css("visibility", "hidden")
        $(".main-price-three").css("visibility", "visible")

    });

    $(".main-box-four").mouseover(function () {
        $(".main-cart-4").css("visibility", "visible")
        $(".main-price-four").css("visibility", "hidden")
    });

    $(".main-box-four").mouseout(function () {
        $(".main-cart-4").css("visibility", "hidden")
        $(".main-price-four").css("visibility", "visible")

    });

    $(".main-box-five").mouseover(function () {
        $(".main-cart-5").css("visibility", "visible")
        $(".main-price-five").css("visibility", "hidden")
    });

    $(".main-box-five").mouseout(function () {
        $(".main-cart-5").css("visibility", "hidden")
        $(".main-price-five").css("visibility", "visible")

    });

    $(".main-box-six").mouseover(function () {
        $(".main-cart-6").css("visibility", "visible")
        $(".main-price-six").css("visibility", "hidden")
    });

    $(".main-box-six").mouseout(function () {
        $(".main-cart-6").css("visibility", "hidden")
        $(".main-price-six").css("visibility", "visible")
    });
    $(".main-box-seven").mouseover(function () {
        $(".main-cart-7").css("visibility", "visible")
        $(".main-price-seven").css("visibility", "hidden")
    });

    $(".main-box-seven").mouseout(function () {
        $(".main-cart-7").css("visibility", "hidden")
        $(".main-price-seven").css("visibility", "visible")
    });

    // Main-two wrapper

    $(".main-two-box-one").mouseover(function () {
        $(".main-two-cart-1").css("visibility", "visible")
        $(".main-two-price-one").css("visibility", "hidden")
    });

    $(".main-two-box-one").mouseout(function () {
        $(".main-two-cart-1").css("visibility", "hidden")
        $(".main-two-price-one").css("visibility", "visible")
    });

    $(".main-two-box-two").mouseover(function () {
        $(".main-two-cart-2").css("visibility", "visible")
        $(".main-two-price-two").css("visibility", "hidden")
    });

    $(".main-two-box-two").mouseout(function () {
        $(".main-two-cart-2").css("visibility", "hidden")
        $(".main-two-price-two").css("visibility", "visible")
    });

    $(".main-two-box-three").mouseover(function () {
        $(".main-two-cart-3").css("visibility", "visible")
        $(".main-two-price-three").css("visibility", "hidden")
    });

    $(".main-two-box-three").mouseout(function () {
        $(".main-two-cart-3").css("visibility", "hidden")
        $(".main-two-price-three").css("visibility", "visible")
    });

    $(".main-two-box-four").mouseover(function () {
        $(".main-two-cart-4").css("visibility", "visible")
        $(".main-two-price-four").css("visibility", "hidden")
    });

    $(".main-two-box-four").mouseout(function () {
        $(".main-two-cart-4").css("visibility", "hidden")
        $(".main-two-price-four").css("visibility", "visible")
    });

    $(".main-two-box-five").mouseover(function () {
        $(".main-two-cart-5").css("visibility", "visible")
        $(".main-two-price-five").css("visibility", "hidden")
    });

    $(".main-two-box-five").mouseout(function () {
        $(".main-two-cart-5").css("visibility", "hidden")
        $(".main-two-price-five").css("visibility", "visible")
    });

    $(".main-two-box-six").mouseover(function () {
        $(".main-two-cart-6").css("visibility", "visible")
        $(".main-two-price-six").css("visibility", "hidden")
    });

    $(".main-two-box-six").mouseout(function () {
        $(".main-two-cart-6").css("visibility", "hidden")
        $(".main-two-price-six").css("visibility", "visible")
    });

    $(".main-two-box-seven").mouseover(function () {
        $(".main-two-cart-7").css("visibility", "visible")
        $(".main-two-price-seven").css("visibility", "hidden")
    });

    $(".main-two-box-seven").mouseout(function () {
        $(".main-two-cart-7").css("visibility", "hidden")
        $(".main-two-price-seven").css("visibility", "visible")
    });


    // Main-three wrapper 

    $(".main-three-box-one").mouseover(function () {
        $(".main-three-cart-1").css("visibility", "visible")
        $(".main-three-price-one").css("visibility", "hidden")
    });

    $(".main-three-box-one").mouseout(function () {
        $(".main-three-cart-1").css("visibility", "hidden")
        $(".main-three-price-one").css("visibility", "visible")

    });

    $(".main-three-box-two").mouseover(function () {
        $(".main-three-cart-2").css("visibility", "visible")
        $(".main-three-price-two").css("visibility", "hidden")
    });

    $(".main-three-box-two").mouseout(function () {
        $(".main-three-cart-2").css("visibility", "hidden")
        $(".main-three-price-two").css("visibility", "visible")

    });

    $(".main-three-box-three").mouseover(function () {
        $(".main-three-cart-3").css("visibility", "visible")
        $(".main-three-price-three").css("visibility", "hidden")
    });

    $(".main-three-box-three").mouseout(function () {
        $(".main-three-cart-3").css("visibility", "hidden")
        $(".main-three-price-three").css("visibility", "visible")

    });

    $(".main-three-box-four").mouseover(function () {
        $(".main-three-cart-4").css("visibility", "visible")
        $(".main-three-price-four").css("visibility", "hidden")
    });

    $(".main-three-box-four").mouseout(function () {
        $(".main-three-cart-4").css("visibility", "hidden")
        $(".main-three-price-four").css("visibility", "visible")

    });

    $(".main-three-box-five").mouseover(function () {
        $(".main-three-cart-5").css("visibility", "visible")
        $(".main-three-price-five").css("visibility", "hidden")
    });

    $(".main-three-box-five").mouseout(function () {
        $(".main-three-cart-5").css("visibility", "hidden")
        $(".main-three-price-five").css("visibility", "visible")

    });

    $(".main-three-box-six").mouseover(function () {
        $(".main-three-cart-6").css("visibility", "visible")
        $(".main-three-price-six").css("visibility", "hidden")
    });

    $(".main-three-box-six").mouseout(function () {
        $(".main-three-cart-6").css("visibility", "hidden")
        $(".main-three-price-six").css("visibility", "visible")
    });
    $(".main-three-box-seven").mouseover(function () {
        $(".main-three-cart-7").css("visibility", "visible")
        $(".main-three-price-seven").css("visibility", "hidden")
    });

    $(".main-three-box-seven").mouseout(function () {
        $(".main-three-cart-7").css("visibility", "hidden")
        $(".main-three-price-seven").css("visibility", "visible")
    });

    // Main-three-second wrapper


    $(".main-three-second-box-one").mouseover(function () {
        $(".main-three-second-cart-1").css("visibility", "visible")
        $(".main-three-second-price-one").css("visibility", "hidden")
    });

    $(".main-three-second-box-one").mouseout(function () {
        $(".main-three-second-cart-1").css("visibility", "hidden")
        $(".main-three-second-price-one").css("visibility", "visible")

    });

    $(".main-three-second-box-two").mouseover(function () {
        $(".main-three-second-cart-2").css("visibility", "visible")
        $(".main-three-second-price-two").css("visibility", "hidden")
    });

    $(".main-three-second-box-two").mouseout(function () {
        $(".main-three-second-cart-2").css("visibility", "hidden")
        $(".main-three-second-price-two").css("visibility", "visible")

    });

    $(".main-three-second-box-three").mouseover(function () {
        $(".main-three-second-cart-3").css("visibility", "visible")
        $(".main-three-second-price-three").css("visibility", "hidden")
    });

    $(".main-three-second-box-three").mouseout(function () {
        $(".main-three-second-cart-3").css("visibility", "hidden")
        $(".main-three-second-price-three").css("visibility", "visible")

    });

    $(".main-three-second-box-four").mouseover(function () {
        $(".main-three-second-cart-4").css("visibility", "visible")
        $(".main-three-second-price-four").css("visibility", "hidden")
    });

    $(".main-three-second-box-four").mouseout(function () {
        $(".main-three-second-cart-4").css("visibility", "hidden")
        $(".main-three-second-price-four").css("visibility", "visible")

    });

    $(".main-three-second-box-five").mouseover(function () {
        $(".main-three-second-cart-5").css("visibility", "visible")
        $(".main-three-second-price-five").css("visibility", "hidden")
    });

    $(".main-three-second-box-five").mouseout(function () {
        $(".main-three-second-cart-5").css("visibility", "hidden")
        $(".main-three-second-price-five").css("visibility", "visible")

    });

    $(".main-three-second-box-six").mouseover(function () {
        $(".main-three-second-cart-6").css("visibility", "visible")
        $(".main-three-second-price-six").css("visibility", "hidden")
    });

    $(".main-three-second-box-six").mouseout(function () {
        $(".main-three-second-cart-6").css("visibility", "hidden")
        $(".main-three-second-price-six").css("visibility", "visible")
    });
    $(".main-three-second-box-seven").mouseover(function () {
        $(".main-three-second-cart-7").css("visibility", "visible")
        $(".main-three-second-price-seven").css("visibility", "hidden")
    });

    $(".main-three-second-box-seven").mouseout(function () {
        $(".main-three-second-cart-7").css("visibility", "hidden")
        $(".main-three-second-price-seven").css("visibility", "visible")
    });
})

// Main Four Wrapper

$(".main-four-box-one").mouseover(function () {
    $(".main-four-cart-1").css("visibility", "visible")
    $(".main-four-price-one").css("visibility", "hidden")
});

$(".main-four-box-one").mouseout(function () {
    $(".main-four-cart-1").css("visibility", "hidden")
    $(".main-four-price-one").css("visibility", "visible")

});

$(".main-four-box-two").mouseover(function () {
    $(".main-four-cart-2").css("visibility", "visible")
    $(".main-four-price-two").css("visibility", "hidden")
});

$(".main-four-box-two").mouseout(function () {
    $(".main-four-cart-2").css("visibility", "hidden")
    $(".main-four-price-two").css("visibility", "visible")

});

$(".main-four-box-three").mouseover(function () {
    $(".main-four-cart-3").css("visibility", "visible")
    $(".main-four-price-three").css("visibility", "hidden")
});

$(".main-four-box-three").mouseout(function () {
    $(".main-four-cart-3").css("visibility", "hidden")
    $(".main-four-price-three").css("visibility", "visible")

});

$(".main-four-box-four").mouseover(function () {
    $(".main-four-cart-4").css("visibility", "visible")
    $(".main-four-price-four").css("visibility", "hidden")
});

$(".main-four-box-four").mouseout(function () {
    $(".main-four-cart-4").css("visibility", "hidden")
    $(".main-four-price-four").css("visibility", "visible")

});

$(".main-four-box-five").mouseover(function () {
    $(".main-four-cart-5").css("visibility", "visible")
    $(".main-four-price-five").css("visibility", "hidden")
});

$(".main-four-box-five").mouseout(function () {
    $(".main-four-cart-5").css("visibility", "hidden")
    $(".main-four-price-five").css("visibility", "visible")

});

$(".main-four-box-six").mouseover(function () {
    $(".main-four-cart-6").css("visibility", "visible")
    $(".main-four-price-six").css("visibility", "hidden")
});

$(".main-four-box-six").mouseout(function () {
    $(".main-four-cart-6").css("visibility", "hidden")
    $(".main-four-price-six").css("visibility", "visible")
});
$(".main-four-box-seven").mouseover(function () {
    $(".main-four-cart-7").css("visibility", "visible")
    $(".main-four-price-seven").css("visibility", "hidden")
});

$(".main-four-box-seven").mouseout(function () {
    $(".main-four-cart-7").css("visibility", "hidden")
    $(".main-four-price-seven").css("visibility", "visible")
});

// Main five wrapper 

$(".main-five-box-one").mouseover(function () {
    $(".main-five-cart-1").css("visibility", "visible")
    $(".main-five-price-one").css("visibility", "hidden")
});

$(".main-five-box-one").mouseout(function () {
    $(".main-five-cart-1").css("visibility", "hidden")
    $(".main-five-price-one").css("visibility", "visible")

});

$(".main-five-box-two").mouseover(function () {
    $(".main-five-cart-2").css("visibility", "visible")
    $(".main-five-price-two").css("visibility", "hidden")
});

$(".main-five-box-two").mouseout(function () {
    $(".main-five-cart-2").css("visibility", "hidden")
    $(".main-five-price-two").css("visibility", "visible")

});

$(".main-five-box-three").mouseover(function () {
    $(".main-five-cart-3").css("visibility", "visible")
    $(".main-five-price-three").css("visibility", "hidden")
});

$(".main-five-box-three").mouseout(function () {
    $(".main-five-cart-3").css("visibility", "hidden")
    $(".main-five-price-three").css("visibility", "visible")

});

$(".main-five-box-four").mouseover(function () {
    $(".main-five-cart-4").css("visibility", "visible")
    $(".main-five-price-four").css("visibility", "hidden")
});

$(".main-five-box-four").mouseout(function () {
    $(".main-five-cart-4").css("visibility", "hidden")
    $(".main-five-price-four").css("visibility", "visible")

});

$(".main-five-box-five").mouseover(function () {
    $(".main-five-cart-5").css("visibility", "visible")
    $(".main-five-price-five").css("visibility", "hidden")
});

$(".main-five-box-five").mouseout(function () {
    $(".main-five-cart-5").css("visibility", "hidden")
    $(".main-five-price-five").css("visibility", "visible")

});

$(".main-five-box-six").mouseover(function () {
    $(".main-five-cart-6").css("visibility", "visible")
    $(".main-five-price-six").css("visibility", "hidden")
});

$(".main-five-box-six").mouseout(function () {
    $(".main-five-cart-6").css("visibility", "hidden")
    $(".main-five-price-six").css("visibility", "visible")
});
$(".main-five-box-seven").mouseover(function () {
    $(".main-five-cart-7").css("visibility", "visible")
    $(".main-five-price-seven").css("visibility", "hidden")
});

$(".main-five-box-seven").mouseout(function () {
    $(".main-five-cart-7").css("visibility", "hidden")
    $(".main-five-price-seven").css("visibility", "visible")
});





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



var headerBox = document.getElementById("headerContainer")
var headerBoxoffset = stickymenu.offsetTop

window.addEventListener("scroll", function (e) {
    requestAnimationFrame(function () {
        if (window.pageYOffset > headerBoxoffset) {
            headerBox.classList.add('header-box-after')
        } else {
            headerBox.classList.remove('header-box-after')
        }
    })
})

var headerBoxImg = document.getElementById("headerContainerImg")
var headerBoxoImgffset = stickymenu.offsetTop

window.addEventListener("scroll", function (e) {
    requestAnimationFrame(function () {
        if (window.pageYOffset > headerBoxoImgffset) {
            headerBoxImg.classList.add('header-box-img-after')
        } else {
            headerBoxImg.classList.remove('header-box-img-after')
        }
    });
});



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











