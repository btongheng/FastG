let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let myTimer;
let playing = true;

showSlides();

function showSlides() {
  if (playing) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].style.display = "block";
    myTimer = setTimeout(showSlides, 3000); // Change every 2 seconds
  } else {
    return;
  }
}

function currentSlide(no) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex = no;
  slides[no - 1].style.display = "block";
  dots[no - 1].className += " active";
  clearTimeout(myTimer);
  myTimer = setTimeout(showSlides, 3000);
}

function manualControl(IncrementNumber) {
  var newslideIndex = slideIndex + IncrementNumber;
  if (newslideIndex < 4 && newslideIndex > 0) {
    currentSlide(newslideIndex);
  }
  if (newslideIndex == 4) {
    currentSlide(1);
  }
  if (newslideIndex == 0) {
    currentSlide(3);
  }
  
}
    