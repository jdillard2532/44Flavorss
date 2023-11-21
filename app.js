const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const galleryImage = document.querySelectorAll(".gallery_image");
let imgIndex;
let imgSrc;

galleryImage.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgIndex = i;
    modal(imgSrc, imgIndex);
  });
});

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function modal(src, imgIndex) {
  //create modal
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".gallery_main").append(modal);
  //create image
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);

  //add close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fa-solid fa-xmark closeBtn");
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });
  //add next button
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fa-solid fa-chevron-right nextBtn");
  nextBtn.addEventListener("click", () => {
    newImage.setAttribute("src", nextImage());
  });
  // add prev button
  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fa-solid fa-chevron-left prevBtn");
  prevBtn.addEventListener("click", () => {
    newImage.setAttribute("src", prevImage());
  });

  modal.append(newImage, closeBtn, prevBtn, nextBtn);
}

function nextImage() {
  imgIndex++;
  if (imgIndex >= galleryImage.length) {
    imgIndex = 0;
  }
  return galleryImage[imgIndex].src;
}

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = galleryImage.length - 1;
  }
  return galleryImage[imgIndex].src;
}
