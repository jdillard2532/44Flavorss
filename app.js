const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const galleryImage = document.querySelectorAll(".gallery_image");

galleryImage.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal(e.target.src);
  });
});

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function modal(src) {
  const modal = document.createElement("div");
  const newImage = document.createElement("img");
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fa-solid fa-xmark closeBtn");
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });
  modal.setAttribute("class", "modal");
  document.querySelector(".gallery_main").append(modal);
  newImage.setAttribute("src", src);
  modal.append(newImage, closeBtn);
}
