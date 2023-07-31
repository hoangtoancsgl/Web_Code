const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  console.log(`The current slide is ${currentSlide}`)
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function showNextSlide() {
  console.log("showNextSlide called")
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showPreviousSlide() {
  console.log("showPreviousSlide called")
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);


// setInterval(showNextSlide, 3000);


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    showNextSlide();
  } else if (event.key === "ArrowLeft") {
    showPreviousSlide();
  }
});
