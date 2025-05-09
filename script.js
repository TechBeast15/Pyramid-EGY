const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const universeImage = document.querySelector(".universeImage");
const TheMummyDiv = document.querySelector(".TheMummyDiv");
part2.classList.add("hiddenClass");

let gate, waterfall, pyramid, partVisible, partHidden;

const GateSlide = new Audio("Assets/Audio/doorOpen.mp3");
const fallingAudio = new Audio("Assets/Audio/falling.mp3");

GateSlide.volume = 0.1;
fallingAudio.currentTime = 3;

function openGateFunction(element) {
  const gateImage = document.querySelector(".gateImage");
  const waterfallImage = document.querySelector(".waterfallImage");
  const pyramidImage = document.querySelector(".pyramidImage");
  const birdsFly = document.querySelector(".birdsFly");
  const thunderVideo = document.querySelector(".thunderVideo");
  
  const buttonBox2 = document.querySelector(".buttonBox2");

  element.classList.toggle("ButtonClass");

  if (element.classList.contains("ButtonClass")) {
    // Toggle ON
    element.innerHTML = `<i class="bi bi-toggle-on"></i>`;
    GateSlide.currentTime = 0;
    GateSlide.play();

    gate = setTimeout(() => {
      gateImage.classList.add("slideGate");
      thunderVideo.play();
      
      thunderVideo.volume = 0.1;
    }, 2000);

    waterfall = setTimeout(() => {
      waterfallImage.classList.add("scaleUp");
      fallingAudio.play();
    }, 6000);

    pyramid = setTimeout(() => {
      pyramidImage.classList.add("opacityClass");
      gateImage.classList.add("opacityClass");
      birdsFly.classList.add("opacityClass");
      thunderVideo.pause();
    }, 10000);

    partVisible = setTimeout(() => {
      part1.classList.add("hiddenClass");
      part1.style.display = "none";
      part2.classList.remove("hiddenClass");
      part2.classList.add("visibleClass");
      universeImage.classList.add("opcityVisible");
    }, 15000);

    partHidden = setTimeout(() => {
      fallingAudio.pause();
      buttonBox2.style.display = "block";
      TheMummyDiv.style.display = "block";
    }, 20000);
  } else {
    // Toggle OFF
    element.innerHTML = `<i class="bi bi-toggle-off"></i>`;

    GateSlide.pause();
    GateSlide.currentTime = 0;
    fallingAudio.pause();
    fallingAudio.currentTime = 0;
    thunderVideo.pause();
    thunderVideo.currentTime = 0;
    cloude.pause();
    cloude.currentTime = 0;

    clearTimeout(gate);
    clearTimeout(waterfall);
    clearTimeout(pyramid);
    clearTimeout(partVisible);
    clearTimeout(partHidden);

    gateImage.classList.remove("slideGate", "opacityClass");
    waterfallImage.classList.remove("scaleUp");
    pyramidImage.classList.remove("opacityClass");
    birdsFly.classList.remove("opacityClass");
    part1.classList.remove("hiddenClass");
    part1.style.display = "";
  }
}

let hideVideoTimeout;
let wasMusicPlayingBeforeVideo = false;

let RockAudio = new Audio("Assets/Audio/rock.mp3");
let DoorAudio = new Audio("Assets/Audio/SecretDoor.mp3");
let StressReliefAudio = new Audio("Assets/Audio/StressRelief.mp3");

function egyptAnimation(element) {
  const egyptImage = document.querySelector(".egyptImage");
  const EgyptVideoDiv = document.querySelector(".EgyptVideoDiv");
  const EgyptVideo = document.querySelector(".EgyptVideo");
  const TheMummy = document.querySelector(".TheMummy");
  const rainVideo = document.querySelector(".rainVideo");
  const eygptButtonDiv = document.querySelector(".eygptButtonDiv");
  const RestartDiv = document.querySelector(".RestartDiv");

  eygptButtonDiv.classList.add("hiddenClass");
  setTimeout(() => {
    eygptButtonDiv.style.display = "none";
  }, 1000);

  element.classList.toggle("ButtonClass");

  if (element.classList.contains("ButtonClass")) {
    // Toggle ON
    element.innerHTML = `<i class="bi bi-toggle-on"></i>`;

    egyptImage.classList.add("brightness1");
    universeImage.classList.add("brightness1");
    EgyptVideoDiv.classList.add("visibleClass");

    setTimeout(() => {
      EgyptVideo.currentTime = 2;
      EgyptVideo.play();

      // Pause background music if it's playing
      if (isMusicPlaying) {
        wasMusicPlayingBeforeVideo = true;
        backgroundMusic.pause();
      } else {
        wasMusicPlayingBeforeVideo = false;
      }

      EgyptVideo.onended = function () {
        if (wasMusicPlayingBeforeVideo) {
          backgroundMusic.play();
        }


        // ++++++++++++++++++++++++
        EgyptVideoDiv.classList.remove("visibleClass");
        egyptImage.classList.remove("brightness1");
        universeImage.classList.remove("brightness1");

        setTimeout(() => {
          TheMummyDiv.classList.add("mummyDivTranform");
        }, 2000);

        setTimeout(() => {
          TheMummy.classList.add("mummyTransform");
          DoorAudio.currentTime = 0;
          DoorAudio.play();

          setTimeout(() => {
            rainVideo.classList.add("rainOpacity");
            StressReliefAudio.play();
            RestartDiv.classList.add("displayClass");
          }, 5000);
        }, 7000);

        RockAudio.play();

        // Resume music if it was playing before
        if (wasMusicPlayingBeforeVideo) {
          backgroundMusic.play();
        }

        // ++++++++++++++++++
      };
    }, 2000);

    // hideVideoTimeout = setTimeout(() => {

    // }, 48000);
  } else {
    // Toggle OFF
    element.innerHTML = `<i class="bi bi-toggle-off"></i>`;
    EgyptVideo.pause();
    EgyptVideo.currentTime = 0;
    EgyptVideo.onended = null; // Clear the onended event to avoid firing later
    EgyptVideoDiv.classList.remove("visibleClass");

    clearTimeout(hideVideoTimeout);
    wasMusicPlayingBeforeVideo = false;
  }
}

let isMusicPlaying = false;
const backgroundMusic = new Audio("Assets/Audio/AlanWalkerMashup.mp3");
backgroundMusic.loop = true;

function playMusic(clickedButton) {
  isMusicPlaying = !isMusicPlaying;

  if (isMusicPlaying) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }

  const allMusicButtons = document.querySelectorAll(
    ".buttonBox button:nth-child(1) + p ~ button, .buttonBox2 button:nth-child(1) + p ~ button, .buttonBox button, .buttonBox2 button"
  );

  allMusicButtons.forEach((button) => {
    const label = button.nextElementSibling?.innerText?.trim();
    if (label === "Music") {
      if (isMusicPlaying) {
        button.classList.add("ButtonClass");
        button.innerHTML = '<i class="bi bi-toggle-on"></i>';
      } else {
        button.classList.remove("ButtonClass");
        button.innerHTML = '<i class="bi bi-toggle-off"></i>';
      }
    }
  });
}

function RestartAnimation(element) {
  element.classList.add("ButtonClass");
  element.innerHTML = `<i class="bi bi-toggle-on"></i>`;

  window.location.reload();
}
