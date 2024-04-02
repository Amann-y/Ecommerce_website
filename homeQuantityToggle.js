export const homeQuantityToggle = (e, id, stock) => {
  // console.log(e.target.classList);
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (e.target.classList[2] === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (e.target.classList[2] === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
