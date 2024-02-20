const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
var btnReceptor = document.querySelector("#receptorAparecer");
var receptor = document.querySelector(".receptor");

let currentIndex = 0;
let intervalId;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
}

function startSlider() {
  intervalId = setInterval(nextSlide, 8000); // Trocar de slide a cada 3 segundos
}

function stopSlider() {
  clearInterval(intervalId);
}

prevButton.addEventListener("click", () => {
  stopSlider();
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  stopSlider();
  nextSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopSlider();
    goToSlide(index);
  });
});

//evento para aparecer os receptores//
btnReceptor.addEventListener("click", function () {
  if (receptor.style.display === "block") {
    receptor.style.display = "none";
  } else {
    receptor.style.display = "block";
  }
});

startSlider();
