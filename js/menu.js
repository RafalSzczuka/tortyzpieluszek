// ***************** variables and functions declaration *****************

// menu elements
const menuBar = document.querySelector(".menu-bar");
const menuItems = document.querySelectorAll(".menu-item");
const menuLogo = document.querySelector(".menu-logo img");

const burgerBtn = document.querySelector(".burger");
const burgerOn = document.querySelector(".fas.fa-bars");
const burgerOff = document.querySelector(".fas.fa-times");

const socialsIcons = document.querySelectorAll(".socials i");

// gallery section from top
const sectionGalleryFromTop = document.querySelector(".gallery").offsetTop;

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

//  listener on every menu item, scroll to coresponding by id section class name
menuItems.forEach(item => {
  item.addEventListener("click", function() {
    const offset = document.querySelector(`.${this.id}`).offsetTop;
    window.scrollTo(0, offset);
    menuToggler();
  });
});

// listener on menu logo, scroll to 0 top position
menuLogo.addEventListener("click", function() {
  window.scrollTo(0, 0);
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
