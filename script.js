/* ============================
   SIMPLE ALERT ON PAGE LOAD
   (You can enable or remove as needed)
============================ */
// window.onload = function () {
//   alert("Welcome to STEM Hub!");
// };


/* ============================
   FORM VALIDATION
   Used on projects.html (or any form using studentName & projectTitle)
============================ */
function validateForm() {
  const nameField = document.getElementById("studentName");
  const projectField = document.getElementById("projectTitle");

  // If the form is not on this page, skip validation
  if (!nameField || !projectField) return true;

  if (nameField.value.trim() === "" || projectField.value.trim() === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


/* ============================
   IMAGE SLIDESHOW (index.html or learn.html)
============================ */
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");

  if (slides.length === 0) return; // No slideshow on page — skip

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // Slideshow speed = 2.5s
}

showSlides();


/* ============================
   MOBILE MENU TOGGLE (optional)
============================ */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}
