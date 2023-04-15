function soundisOff() {
  try {
    document.getElementById("soundONButton").classList.add("d-none");
    document.getElementById("soundONButton").classList.remove("d-block");
    document.getElementById("soundOFFButton").classList.add("d-block");
    document.getElementById("soundOFFButton").classList.remove("d-none");
  } catch (error) {
    console.log("soundisOff function",error)
  }
}

function soundisOn() {
  try {
    document.getElementById("soundOFFButton").classList.add("d-none");
    document.getElementById("soundOFFButton").classList.remove("d-block");
    document.getElementById("soundONButton").classList.add("d-block");
    document.getElementById("soundONButton").classList.remove("d-none");
  } catch (error) {
    console.log("soundisOn function",error)
  }
}

function checkSound() {
  if (localStorage.getItem("muted").toString() == "true") {
    console.log("SOUND IS MUTED !!")
    soundisOff();
  } else {

    soundisOn();

    beat = new Audio(beatUrl);
    beat.play().catch((e) => {
      console.log("INTERACTION REQUIRED")
      clickEvent = window.addEventListener(
        "click",
        () => {
          console.log("USER INTERACTED AND SOUND SHOULD PLAY")
          beat.play();
          beat.addEventListener('ended', function() {
            console.log("LOOP HAPPENED")
            this.currentTime = 0;
            this.play();
        }, false);
          soundisOn()
        },
        { once: true }
      );
    });
    beat.addEventListener('ended', function() {
      console.log("LOOP HAPPENED")
      this.currentTime = 0;
      this.play();
  }, false);
  }
}

function turnOff() {
  try {
    beat.pause();
  } catch (error) {
  }
  localStorage.setItem("muted", true);
  soundisOff();
}

function turnOn() {
  try {
    beat = new Audio(beatUrl);
    beat.play();
    beat.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  } catch (error) {
  }
  localStorage.setItem("muted", false);
  soundisOn();
}

window.addEventListener("load", (event) => {
  checkSound();
});
