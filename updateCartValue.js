const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = `   <i class="bi bi-bag mx-1"></i>${cartProducts.length}`);
};
