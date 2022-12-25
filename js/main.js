// Cart Function
let cartIcon = document.querySelector(".cart > img");
let cartList = document.querySelector(".your-cart");
let cartLength = document.querySelector(".cart span");

let closeCart = document.createElement("div");
closeCart.className = "close-cart";
document.body.appendChild(closeCart);

cartIcon.addEventListener("click", () => {
  cartList.classList.toggle("active");
  closeCart.classList.toggle("active");
});

closeCart.addEventListener("click", () => {
  closeCart.classList.remove("active");
  cartList.classList.remove("active");
});
// Add to Cart
let addToCart = document.querySelector(".add-cart");

let productsDiv = document.createElement("div");
productsDiv.className = "products-div";
cartList.appendChild(productsDiv);

let checkout = document.createElement("button");
checkout.textContent = "Checkout";
checkout.className = "checkout";

addToCart.addEventListener("click", () => {
  cartList.classList.add("active");
  closeCart.classList.add("active");

  let product = document.createElement("div");
  product.className = "product";

  let productImg = document.createElement("img");
  productImg.className = `product-img`;
  productImg.src = selectedImg.src;

  let productTitle = document.createElement("h5");
  productTitle.textContent = document.querySelector("h1").textContent;

  let productPrice = document.createElement("p");
  productPrice.innerHTML = `$125.00 x ${quantity.innerHTML}  <span>$${price.textContent}.00</span>`;

  let removeProduct = document.createElement("img");
  removeProduct.className = "remove";
  removeProduct.src = "images/icon-delete.svg";

  cartLength.classList.add("active");
  cartLength.textContent++;

  removeProduct.addEventListener("click", () => {
    product.remove();

    cartLength.textContent--;

    if (cartLength.textContent == 0) {
      cartLength.classList.remove("active");
    }

    if (!productsDiv.innerHTML) {
      checkout.remove();
      let emptyMessage = document.createElement("p");
      emptyMessage.textContent = "Your cart is empty";
      cartList.appendChild(emptyMessage);
    }
  });

  product.appendChild(productImg);
  product.appendChild(productTitle);
  product.appendChild(productPrice);
  product.appendChild(removeProduct);
  productsDiv.appendChild(product);

  if (document.querySelector(".your-cart > p")) {
    document.querySelector(".your-cart > p").remove();

    cartList.appendChild(checkout);
  }
});

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
  cartList.classList.remove("active");

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
