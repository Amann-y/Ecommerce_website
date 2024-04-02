import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let totalProductPrice = localCartProducts.reduce((acc, ele) => {
    let productPrice = parseInt(ele.price) || 0;
    return acc + productPrice;
  }, 0);

  productSubTotal.innerText = `₹${totalProductPrice}`
  productFinalTotal.innerText = `₹${totalProductPrice + 25}`
};
