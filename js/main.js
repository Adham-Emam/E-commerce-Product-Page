// Ressponsive List
let ressponsiveIcon = document.querySelector(".ressponsive-icon");

ressponsiveIcon.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
});

// Product Images
let selectedImg = document.querySelector(".selected-img  img");
let productImgs = document.querySelectorAll(".imgs > div");
let imgsArray = [...productImgs];

imgsArray.forEach((img) => {
  img.addEventListener("click", (el) => {
    imgsArray.forEach((e) => e.classList.remove("active"));
    el.currentTarget.classList.add("active");
    selectedImg.src = document.querySelector(".imgs > .active img").src;
  });
});

// Quantity
let price = document.querySelector(".price span");
let oldPrice = document.querySelector(".old-price span");
let quantityPlus = document.querySelector(".quantity img:last-child");
let quantityMinus = document.querySelector(".quantity img:first-child");
let quantity = document.querySelector(".quantity span");

quantityPlus.addEventListener("click", () => {
  quantity.innerHTML++;
  price.innerHTML = +price.innerHTML + 125;
  oldPrice.innerHTML = price.innerHTML * 2;
});
quantityMinus.addEventListener("click", () => {
  if (quantity.innerHTML == 1) {
    return false;
  }
  quantity.innerHTML--;
  price.innerHTML = price.innerHTML - 125;
  oldPrice.innerHTML = price.innerHTML * 2;
});
