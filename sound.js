function soundisOff() {
  try {
    document.getElementById("soundONButton").classList.add("d-none");
    document.getElementById("soundONButton").classList.remove("d-block");
    document.getElementById("soundOFFButton").classList.add("d-block");
    document.getElementById("soundOFFButton").classList.remove("d-none");
  } catch (error) {
    console.log("soundisOff function", error);
  }
}

function soundisOn() {
  try {
    document.getElementById("soundOFFButton").classList.add("d-none");
    document.getElementById("soundOFFButton").classList.remove("d-block");
    document.getElementById("soundONButton").classList.add("d-block");
    document.getElementById("soundONButton").classList.remove("d-none");
  } catch (error) {
    console.log("soundisOn function", error);
  }
}

function checkSound() {
  soundisOn();

  beat = new Audio(beatUrl);
  beat
    .play()
    .then((e) => {
      console.log("SOUND IS PLAYING !!");
    })
    .catch((e) => {
      console.log("INTERACTION REQUIRED");
      clickEvent = window.addEventListener(
        "click",
        () => {
          console.log("USER INTERACTED AND SOUND SHOULD PLAY");
          beat.play();
          beat.addEventListener(
            "ended",
            function () {
              console.log("LOOP HAPPENED");
              this.currentTime = 0;
              this.play();
            },
            false
          );
          soundisOn();
        },
        { once: true }
      );
    });
  beat.addEventListener(
    "ended",
    function () {
      console.log("LOOP HAPPENED");
      this.currentTime = 0;
      this.play();
    },
    false
  );
}

function turnOff() {
  try {
    muted = true;
    beat.pause();
   
  } catch (error) {}

  soundisOff();
}

function turnOn() {
  try {
    muted = false;
    beat = new Audio(beatUrl);
    beat.play();
    beat.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  } catch (error) {}

  soundisOn();
}

window.addEventListener("load", (event) => {
  checkSound();
});
