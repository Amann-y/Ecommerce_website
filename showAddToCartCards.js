import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProducts.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();

let filteredProducted = products.filter((elem) => {
  return cartProducts.some((ele) => ele.id == elem.id);
});

const cartElement = document.querySelector(".main");
const template = document.querySelector("#template");

function showCartProduct() {
  filteredProducted.forEach((ele) => {
    const { id, image, name, category, price, stock } = ele;
    let productClone = document.importNode(template.content, true);

    const Ls_Data = fetchQuantityFromCartLS(id, price);
    
    
    productClone.querySelector("#cart-prod-categ").innerText = category;
    productClone.querySelector("#cart_prod_img").src = image;
    productClone.querySelector(
      "#cart_prod_price"
    ).innerText = `₹${Ls_Data.price}`;
    productClone.querySelector(".quantity").innerText = Ls_Data.quantity;
    productClone.querySelector(".container").setAttribute("id", `cont${id}`);

    productClone
      .querySelector("#stockElement")
      .addEventListener("click", (e) => {
        incrementDecrement(e, id, stock, price);
      });

    const btn = productClone.querySelector("#remove_cart_item");
    btn.setAttribute("data-id", id);
    btn.addEventListener("click", (e) => removeProdFromCart(id, e));

    cartElement.append(productClone);
  });
}

showCartProduct();

updateCartProductTotal()