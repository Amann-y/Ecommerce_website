import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#product_container");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((ele) => {
    const { id, name, category, description, image, price, brand, stock } = ele;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector("#product-card-img").src = image;
    productClone.querySelector("#product-card-img").alt = name;
    productClone.querySelector("#product-card-name").textContent = category;
    productClone.querySelector("#product-card-description").textContent =
      description;

    productClone.querySelector(
      "#product-card-price"
    ).textContent = `₹${price}`;
    productClone.querySelector("#product-card-cut-price").textContent = `₹${
      price * 4
    }`;

    productClone.querySelector("#product-card-stock").textContent = stock;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (e) => {
        homeQuantityToggle(e, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (e) => {
        addToCart(e, id, stock);
      });

    productContainer.append(productClone);
  });
};
