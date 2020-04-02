// ***************** variables and functions declaration *****************

// menu elements
const menuBar = document.querySelector(".menu-bar");
const menuItems = document.querySelectorAll(".menu-item");
const menuLogo = document.querySelector(".menu-logo img");

const menuAbout = document.getElementById("about");
const menuNews = document.getElementById("news");
const menuGallery = document.getElementById("gallery");
const menuOrder = document.getElementById("order");
const menuContact = document.getElementById("contact");

const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");

const socialsIcons = document.querySelectorAll(".socials i");

// sections
const sectionHome = document.querySelector(".home");
const sectionAbout = document.querySelector(".about");
const sectionNews = document.querySelector(".news");
const sectionGallery = document.querySelector(".gallery");
const sectionOrder = document.querySelector(".order");
const sectionContact = document.querySelector(".contact");

// sections from top
const sectionHomeFromTop = sectionHome.offsetTop;
const sectionAboutFromTop = sectionAbout.offsetTop;
const sectionNewsFromTop = sectionNews.offsetTop;
const sectionGalleryFromTop = sectionGallery.offsetTop;
const sectionOrderFromTop = sectionOrder.offsetTop;
const sectionContactFromTop = sectionContact.offsetTop;

// burger menu icon toggler
function burgerToggler() {
  menuLogo.src = "img/torty-z-pieluszek-logo-menu-male-2.png";
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

// universal functions to add and remove class to multiple elements (provided in an array)
function addClassForElements(elementsArray, setClass) {
  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].forEach(item => item.classList.add(setClass));
  }
}
function removeClassForElements(elementsArray, setClass) {
  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].forEach(item => item.classList.remove(setClass));
  }
}

// ***************** IMPLEMENTATION *****************

// scroll to section
menuLogo.addEventListener("click", function() {
  window.scrollTo(0, sectionHomeFromTop);
  menuToggler();
});
menuAbout.addEventListener("click", function() {
  window.scrollTo(0, sectionAboutFromTop);
  menuToggler();
});
menuNews.addEventListener("click", function() {
  window.scrollTo(0, sectionNewsFromTop);
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

// add small class to menu bar (only in desktop view)
window.addEventListener("scroll", function() {
  if (window.scrollY >= sectionGalleryFromTop) {
    addClassForElements([menuItems, socialsIcons], "small");
    menuLogo.classList.add("active");
  } else {
    removeClassForElements([menuItems, socialsIcons], "small");
    menuLogo.classList.remove("active");
  }
});
