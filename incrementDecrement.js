import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (e,id,stock,price)=>{
//   console.log(e.target.classList);
  const currentCardElement = document.querySelector(`#cont${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector("#cart_prod_price")
  
  let quantity = 1
  let localStoragePrice =  0

  let localCartProducts = getCartProductFromLS()

  let existingProduct = localCartProducts.find((ele)=>ele.id===id)
  if (existingProduct) {
    quantity = existingProduct.quantity
    localStoragePrice = existingProduct.price
  }else{
    localStoragePrice = price
    price = price
  }

  if (e.target.id==="cart-inc-btn") {
    if (quantity < stock) {
        quantity += 1
    }else if(quantity===stock){
        quantity = stock
        localStoragePrice = price*stock

    }
  }

  if (e.target.id==="cart-dec-btn") {
    if (quantity > 1) {
        quantity -= 1
    }
  }

  localStoragePrice = price*quantity
  localStoragePrice = Number(localStoragePrice.toFixed(2))

  let updatedCart = {id, quantity, price:localStoragePrice}
  updatedCart = localCartProducts.map((ele)=>{
    return ele.id===id ? updatedCart: ele
  })

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))

  productQuantity.innerText = quantity
  productPrice.innerText = `₹${localStoragePrice}`

  updateCartProductTotal()
}