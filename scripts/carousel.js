let slideshowPosMap = new Map();

showSlides("project-carousel", 0);
showSlides("experience-carousel", 0);
showSlides("education-carousel", 0);

function showSlides(slideshowID, slideIndex) {
  let i;
  let slideshow = document.getElementById(slideshowID);
  let slides = slideshow.getElementsByClassName("slide");
  let slideCounter = slideshow.getElementsByClassName("slide-counter")[0];

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  slideshowPosMap.set(slideshowID, slideIndex);
  slideCounter.innerHTML = `${slideIndex + 1} / ${slides.length}`;
}

function changeSlide(slideshowID, n) {
  showSlides(slideshowID, slideshowPosMap.get(slideshowID) + n);
}
