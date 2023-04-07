// const gra = function(min, max) {
//     return Math.random() * (max - min) + min;
// }

// const gri = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const init = function(){
//   let items = document.querySelectorAll('section');
//   for (let i = 0; i < items.length; i++){
//     items[i].style.minHeight = gra(20,30) + 'vh';
//     items[i].style.background = randomColor({luminosity: 'light'});
//   }

//   cssScrollSnapPolyfill()
// }
// init();





var swiper = new Swiper(".mySwiper", {
    draggable: true,
    slidesPerView: 1.25,
    initialSlide: 1,
    loop: false,
    breakpoints: {
        // when window width is >= 320px
        320: {
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 3.5,
            spaceBetween: 40
        }
    },
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$('#poster1').click(swiper, function () {

    swiper.slideTo(0);
})
$('#poster2').click(swiper, function () {
    swiper.slideTo(1);
})
$('#poster3').click(swiper, function () {
    swiper.slideTo(2);
})

$('#poster4').click(swiper, function () {
    swiper.slideTo(3);
})

$('#poster5').click(swiper, function () {
    swiper.slideTo(4);
})

$('#poster6').click(swiper, function () {
    swiper.slideTo(5);
})

$('#poster7').click(swiper, function () {
    swiper.slideTo(6);
})

$('#poster8').click(swiper, function () {
    swiper.slideTo(7);
})

$('#poster9').click(swiper, function () {
    swiper.slideTo(8);
})

$('#poster10').click(swiper, function () {
    swiper.slideTo(9);
})

$('#poster11').click(swiper, function () {
    swiper.slideTo(10);
})

$('#poster12').click(swiper, function () {
    swiper.slideTo(11);
})

$('#poster13').click(swiper, function () {
    swiper.slideTo(12);
})

$('#poster14').click(swiper, function () {
    swiper.slideTo(13);
})

$('#poster15').click(swiper, function () {
    swiper.slideTo(14);
})

$('#poster16').click(swiper, function () {
    swiper.slideTo(15);
})

$('#poster17').click(swiper, function () {
    swiper.slideTo(16);
})

$('#poster18').click(swiper, function () {
    swiper.slideTo(17);
})

$('#poster19').click(swiper, function () {
    swiper.slideTo(18);
})

$('#poster20').click(swiper, function () {
    swiper.slideTo(19);
})

$('#poster21').click(swiper, function () {
    swiper.slideTo(20);
})

$('#poster22').click(swiper, function () {
    swiper.slideTo(21);
})

$('#poster23').click(swiper, function () {
    swiper.slideTo(22);
})


// object.addEventListener("load", m())

// m()
// function m() {
//     console.log(localStorage.muted == true)
//     if (localStorage.muted == true) {
//         document.getElementById("myAudio").muted = true;
//         let beat = new Audio('../music/7a. Music for Road Map and Team.mp3');
//         beat.play
//         document.getElementById("soundOFF").classList.add("d-none");
//         document.getElementById("soundOFF").classList.remove("d-block");
//         document.getElementById("soundON").classList.add("d-block");
//         document.getElementById("soundON").classList.remove("d-none");
//         console.log("done")
//     }
// }




function soundOFF() {
    document.getElementById("myAudio").muted = true;
    // let beat = new Audio('../music/7a. Music for Road Map and Team.mp3');
    // beat.pause
    document.getElementById("soundOFF").classList.add("d-none");
    document.getElementById("soundOFF").classList.remove("d-block");
    document.getElementById("soundON").classList.add("d-block");
    document.getElementById("soundON").classList.remove("d-none");
    localStorage.setItem("muted", true);
}

function soundON() {
    document.getElementById("myAudio").muted = false;
    let beat = new Audio('../music/7a. Music for Road Map and Team.mp3');
    beat.play
    document.getElementById("soundON").classList.add("d-none");
    document.getElementById("soundON").classList.remove("d-block");
    document.getElementById("soundOFF").classList.add("d-block");
    document.getElementById("soundOFF").classList.remove("d-none");
    localStorage.setItem("muted", false);
}