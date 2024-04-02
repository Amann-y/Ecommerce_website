import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const removeProdFromCart = (id, e) => {
  const cartProducts = getCartProductFromLS();
  const updated_prods = cartProducts.filter((ele) => {
    return ele.id !== Number(e.target.getAttribute("data-id"));
  });
  localStorage.setItem("cartProductLS", JSON.stringify(updated_prods));
  let removeContainerCard = document.getElementById(`cont${id}`);
  if (removeContainerCard) {
    removeContainerCard.remove();

    Toastify({
      text: `Item with id${id} has been deleted`,
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

    
  }

  updateCartValue(updated_prods);
};
