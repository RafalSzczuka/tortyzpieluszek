// menu elements
const menuBar = document.querySelector(".menu-bar");
const menuLogo = document.querySelector(".menu-logo img");
const menuAbout = document.getElementById("about");
const menuGallery = document.getElementById("gallery");
const menuOrder = document.getElementById("order");
const menuContact = document.getElementById("contact");
const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");

// sections
const sectionHome = document.querySelector(".home");
const sectionAbout = document.querySelector(".about");
const sectionGallery = document.querySelector(".gallery");
const sectionOrder = document.querySelector(".order");
const sectionContact = document.querySelector(".contact");

// sections from top
const sectionHomeFromTop = sectionHome.offsetTop;
const sectionAboutFromTop = sectionAbout.offsetTop;
const sectionGalleryFromTop = sectionGallery.offsetTop;
const sectionOrderFromTop = sectionOrder.offsetTop;
const sectionContactFromTop = sectionContact.offsetTop;

// burger menu icon toggler
function burgerToggler() {
  menuBar.classList.toggle("active");
  burgerOn.classList.toggle("active");
  burgerOff.classList.toggle("active");
}

// menu toggler
function menuToggler() {
  if (menuBar.classList.contains("active")) {
    burgerToggler();
  }
}

// burger menu active class trigger
burgerBtn.addEventListener("click", function() {
  burgerToggler();
});

// scroll to section
menuLogo.addEventListener("click", function() {
  window.scrollTo(0, sectionHomeFromTop);
  menuToggler();
});
menuAbout.addEventListener("click", function() {
  window.scrollTo(0, sectionAboutFromTop);
  menuToggler();
});
menuGallery.addEventListener("click", function() {
  window.scrollTo(0, sectionGalleryFromTop);
  menuToggler();
});
menuOrder.addEventListener("click", function() {
  window.scrollTo(0, sectionOrderFromTop);
  menuToggler();
});
menuContact.addEventListener("click", function() {
  window.scrollTo(0, sectionContactFromTop);
  menuToggler();
});

window.addEventListener("scroll", function() {
  if (window.scrollY >= sectionAboutFromTop) {
    menuLogo.classList.add("active");
  } else {
    menuLogo.classList.remove("active");
  }
});
