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
 var cart=getCart()
    var response='In your cart, you have'

    if (cart.length === 0 ) {
        console.log('Your shopping cart is empty.')
    }

    for (var i=0; i < cart.length; i++) {
        if (i === 0) {
            // This is the first iteration
           response=`${response} ${formatCartItem(cart[i])}`
      } else if ( i === (cart.length - 1) && i === 1 ) {
           // This is the last iteration of a cart with two elements
            response=`${response} and ${formatCartItem(cart[i])}`
      } else if ( i === (cart.length - 1) ) {
           // This is the last iteration of a cart with more than two elements
           response=`${response}, and ${formatCartItem(cart[i])}`
       } else {
          
           response=`${response}, ${formatCartItem(cart[i])}`
       }
   }
   response=`${response}.`
   console.log(response)
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
