
let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    // Add item to cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update total price
    totalPrice += itemPrice;

    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear the current cart items
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // If the cart is empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
    }

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    // Remove the item from the cart array and update the total price
    totalPrice -= cart[index].price;
    cart.splice(index, 1);

    // Update the cart display
    displayCart();
}

function checkout() {
    if (cart.length > 0) {
        // Clear the cart and reset total price
        cart = [];
        totalPrice = 0;
        displayCart();

        // Show confirmation message
        document.getElementById("confirmation").style.display = "block";
    } else {
        alert("Your cart is empty! Please add some items.");
    }
}
