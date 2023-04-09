function soundisOff() {
  try {
    document.getElementById("soundONButton").classList.add("d-none");
    document.getElementById("soundONButton").classList.remove("d-block");
    document.getElementById("soundOFFButton").classList.add("d-block");
    document.getElementById("soundOFFButton").classList.remove("d-none");
  } catch (error) {
  }
}

function soundisOn() {
  try {
    document.getElementById("soundOFFButton").classList.add("d-none");
    document.getElementById("soundOFFButton").classList.remove("d-block");
    document.getElementById("soundONButton").classList.add("d-block");
    document.getElementById("soundONButton").classList.remove("d-none");
  } catch (error) {
  }
}

function checkSound() {
  if (localStorage.getItem("muted").toString() == "true") {
    soundisOff();
  } else {
    soundisOn();

    beat = new Audio(beatUrl);
    beat.play().catch((e) => {
      window.addEventListener(
        "click",
        () => {
          beat.play();
          soundisOn()
        },
        { once: true }
      );
    });
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
  } catch (error) {
  }
  localStorage.setItem("muted", false);
  soundisOn();
}

window.addEventListener("load", (event) => {
  checkSound();
});
