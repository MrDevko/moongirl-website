
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
  let beat = new Audio("../music/7a. Music for Road Map and Team.mp3");
  beat.play;
  document.getElementById("soundON").classList.add("d-none");
  document.getElementById("soundON").classList.remove("d-block");
  document.getElementById("soundOFF").classList.add("d-block");
  document.getElementById("soundOFF").classList.remove("d-none");
  localStorage.setItem("muted", false);
}
