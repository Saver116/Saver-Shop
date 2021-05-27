"use strict";



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



var hiddenTarget = 'hidden'
var target = 'target'
var sourceTarget = 'source'

var targetIdToShow = 1

function main() {
    var targets = getElements(target)
    var sources = getElements(sourceTarget)
    sources.forEach(function (sourceNode) {
        var sourceNodeId = extractId(sourceNode, sourceTarget)
        sourceNode.addEventListener('click', function () {
            showTarget(targets, sourceNodeId)
        })
    })
    showTarget(targets, targetIdToShow)
}

function getElements(type) {
    return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
        var target1Num = extractId(targetNode1, target)
        var target2Num = extractId(targetNode2, target)
        return target1Num > target2Num
    })
}

function extractId(targetNode, baseClass) {
    var currentClassIndex = targetNode.classList.length
    while (currentClassIndex--) {
        var currentClass = targetNode.classList.item(currentClassIndex)
        var maybeIdNum = parseInt(currentClass.split('-')[1])
        if (isNaN(maybeIdNum)) {
            continue
        }
        var classStrinToValidate = baseClass + '-' + maybeIdNum
        if (classStrinToValidate === currentClass) {
            return maybeIdNum
        }
    }
}

function showTarget(targets, targetId) {
    targets.forEach(function (targetNode, targetIndex) {
        var currentTargetNodeId = extractId(targetNode, target)
        if (currentTargetNodeId === targetId) {
            targetNode.classList.remove(hiddenTarget)
        } else {
            targetNode.classList.add(hiddenTarget)
        }
    })
}

main()




$(function () {

    $("#rateYo").rateYo({
        rating: 0,
        fullStar: true,
        starWidth: "24px",
    });
});
