// Ressponsive List
let ressponsiveIcon = document.querySelector(".ressponsive-icon");
let ressponsiveList = document.querySelector(".ressponsive-list");
let overlay = document.querySelector(".container > .overlay");
let closeBtn = document.querySelector(".ressponsive-list .close");

ressponsiveIcon.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  ressponsiveList.classList.toggle("active");
  overlay.classList.toggle("active");
  overlay.addEventListener("click", () => {
    ressponsiveIcon.classList.remove("active");
    ressponsiveList.classList.remove("active");
    overlay.classList.remove("active");
  });
  closeBtn.addEventListener("click", () => {
    ressponsiveIcon.classList.remove("active");
    ressponsiveList.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Product Images
let gallery = document.querySelector(".gallery");
let selectedImg = document.querySelector(".selected-img  img");

selectedImg.addEventListener("click", (e) => {
  let popUp = document.createElement("div");
  popUp.className = "popup";

  let imgClone = e.currentTarget.cloneNode(true);
  imgClone.className = "selected-img";

  let overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.addEventListener("click", () => {
    popUp.remove();
    overlay.remove();
  });

  popUp.appendChild(imgClone);
  document.body.append(overlay);
  document.body.append(popUp);
});

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
