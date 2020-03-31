const sliderImg = document.querySelector(".slider img");
const nextPhoto = document.getElementById("next-photo");
const currentPhoto = document.getElementById("current-photo");

const photos = [
  "img/header-banner-photo-1.JPG",
  "img/header-banner-photo-2.JPG",
  "img/header-banner-photo-3.jpg"
];

let activeElement = 0;

function changePhoto() {
  activeElement++;
  if (activeElement == photos.length) {
    activeElement = 0;
  }
  sliderImg.src = photos[activeElement];
}

setInterval(changePhoto, 5000);
