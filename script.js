function addToCart(item) {

    let cart = document.getElementById("cart");

    let li = document.createElement("li");

    li.className = "list-group-item";

    li.textContent = item + " added to cart";

    cart.appendChild(li);
}