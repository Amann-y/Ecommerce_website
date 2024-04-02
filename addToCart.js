import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

getCartProductFromLS();

export const addToCart = (e, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentCardElement = document.querySelector(`#card${id}`);

  let quantity = currentCardElement.querySelector(".productQuantity").innerText;

  let price = currentCardElement.querySelector("#product-card-price").innerText;

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify( updateCart));
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);

  quantity = Number(quantity);

  let updateCart = { id, quantity, price };

  arrLocalStorageProduct.push(updateCart);

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  Toastify({
    text: `Item with id${id} has been added`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  updateCartValue(arrLocalStorageProduct);
};
