var cart = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var newItem = {[itemName]: itemPrice};
 cart.push(newItem);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemName = [];
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
      itemName.push(item + " at $" + cart[i][item]);
    }
  }
  console.log("In your cart, you have " + itemName[i] + ".");
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
