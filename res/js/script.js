// Navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

// End of Navbar

// Section 2 Video

// event variables
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

// video event

// play effect

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "fas fa-pause";
    video.style.opacity = ".75";
  } else {
    video.pause();
    btn.className = "fas fa-play";
    video.style.opacity = ".35";
  }
};

// button click event
btn.addEventListener("click", () => {
  playPause();
});

// time progress bar
video.addEventListener("timeupdate", () => {
  const current = parseFloat(video.currentTime).toFixed(1);
  const duration = video.duration % 60;
  const barWith = current / duration;
  const counter = document.querySelector(".counter");

  bar.style.width = `${barWith * 100}%`;
  if (video.ended) {
    btn.className = "fas fa-play";
    video.style.opacity = ".35";
  }

  counter.innerText = `${current} / ${duration}`;

  console.log("counter:", counter);
  console.log("current : ", current);
  console.log("duration : ", duration);
});

// Enod of Section 2 Video

// Section 3 Cards

// Initialize Swiper

let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 10,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
});

// End of Section 3 Cards
