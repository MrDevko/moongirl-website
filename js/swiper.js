var swiper = new Swiper(".mySwiper", {
  draggable: true,
  slidesPerView: 1.25,
  initialSlide: 1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      initialSlide: 0,
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      initialSlide: 0,
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
});


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

