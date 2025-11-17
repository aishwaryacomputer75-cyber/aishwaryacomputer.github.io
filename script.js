// Example popup for admission button
document.addEventListener("DOMContentLoaded", function(){

    // Admission Form Submit
    const form = document.getElementById("admissionForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Form submitted successfully!");
            form.reset();
        });
    }

    // Hero Apply Now Button
    const btn = document.querySelector(".btn");
    if(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            alert("Redirecting to admission page...");
            window.location.href = "admission.html";
        });
    }

});
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);  // 5000 = 5 seconds
showSlide(currentIndex);
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Automatic sliding every 5 seconds
setInterval(nextSlide, 5000);

// Click on dots to jump to a specific slide
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// Initialize first slide
showSlide(slideIndex);
