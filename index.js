const cardContainer = document.getElementById("card-container");
const addProduct = document.getElementById("add-product");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const cartContainer = document.getElementById("cart-items");

let totalPrice = 0;

let preset = [
    { name: "Apple", price: 1.29, image: "./assets/apples.png" },
    { name: "Avocado", price: 1.99, image: "./assets/avocado.png" },
    { name: "Broccoli", price: 2.49, image: "./assets/broccoli.png" },
    { name: "Butter", price: 4.49, image: "./assets/butter.png" },
    { name: "Carrot", price: 0.99, image: "./assets/carrots.png" },
    { name: "Cheese", price: 5.49, image: "./assets/cheese.png" },
    { name: "Egg", price: 0.39, image: "./assets/eggs.png" },
    { name: "Grape", price: 2.99, image: "./assets/grapes.png" },
    { name: "Milk", price: 3.79, image: "./assets/milk.png" },
    { name: "Onion", price: 0.79, image: "./assets/onion.png" },
    { name: "Orange", price: 1.19, image: "./assets/oranges.png" },
    { name: "Peach", price: 1.49, image: "./assets/peach.png" },
    { name: "Pepper", price: 1.59, image: "./assets/peppers.png" },
    { name: "Potato", price: 0.99, image: "./assets/potato.png" },
    { name: "Strawberry", price: 3.49, image: "./assets/strawberries.png" },
    { name: "Yogurt", price: 1.19, image: "./assets/yogurt.png" },
];

let cart = [];

function renderCartItem(item) {
    const cartItemHTML = `
        <div class="row cart-item g-1 align-items-center mb-2 p-2 border rounded" 
            data-name="${item.name}" 
            data-price="${item.price}">
            
            <div class="col-4">
                <h6 class="mb-0 text-truncate">${item.name}</h6>
            </div>

            <div class="col-4">
                <div class="input-group input-group-sm">
                    <button class="btn btn-outline-secondary decrease" type="button">-</button>
                    <input
                        type="text"
                        class="form-control text-center quantity-input px-1"
                        value="${item.quantity}"
                        style="width: 35px"
                        readonly
                    />
                    <button class="btn btn-outline-secondary increase" type="button">+</button>
                </div>
            </div>

            <div class="col-4 d-flex align-items-center justify-content-evenly">
                <span class="fw-bold me-2 small">$${(
                    item.price * item.quantity
                ).toFixed(2)}</span>
                <button class="btn btn-sm btn-outline-danger remove">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `;

    cartContainer.innerHTML += cartItemHTML;
}

function renderCart() {
    cartContainer.innerHTML = "";
    cart.forEach(renderCartItem);
}

function addToCart(name, price) {
    // check if the item and price being added already exsit as set
    const existingItem = cart.find(
        (item) => item.name === name && item.price === price
    );

    if (existingItem) {
        // if they do
        existingItem.quantity += 1; // increase quantity
    } else {
        cart.push({ name, price, quantity: 1 }); // if not added need item
    }

    renderCart();
}

// Render cards
preset.forEach((item) => {
    const cardHTML = `
        <div class="card" style="width: 10rem;">
            <img
                src="${item.image}"
                class="card-img-top"
                alt="${item.name}"
                style="height: 120px; object-fit: cover;"
            />
            <div class="card-body text-center">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                <a href="#" 
                    class="btn btn-primary btn-sm add-to-cart" 
                    data-name="${item.name}" 
                    data-price="${item.price}">
                    Add to cart
                </a>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});

// cardContainer event delegation on the parent div
cardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        e.preventDefault(); // stop page jump from href="#"

        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);

        console.log(`Added to cart via preset: ${name}  $${price.toFixed(2)}`);
        addToCart(name, price);
    }
});

// event listener for your input item
addProduct.addEventListener("click", () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (!name || isNaN(price)) {
        alert(
            "Please enter a valid product and price(e.g.,name: Chicken,  price: 4.99)."
        );
        return;
    }

    console.log(`Added to cart via userinput: ${name}  $${price.toFixed(2)}`);
    addToCart(name, price);

    // Clear inputs
    productNameInput.value = "";
    productPriceInput.value = "";
});
// Event Delegation for cartitem actions (+ / - / Remove)
cartContainer.addEventListener("click", (e) => {
    const target = e.target;
    const cartItemDiv = target.closest(".cart-item"); // find the clicked cart row
    if (!cartItemDiv) return; // click was outside cart items

    // gets clicked item and find in cart arry
    const name = cartItemDiv.dataset.name;
    const price = parseFloat(cartItemDiv.dataset.price);
    const cartItem = cart.find(
        (item) => item.name === name && item.price === price
    );

    // Decrease quantity
    if (target.classList.contains("decrease")) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            // if quantity = 1, confirm removal
            if (confirm(`Remove ${cartItem.name} from cart?`)) {
                cart = cart.filter(
                    (item) => !(item.name === name && item.price === price)
                );
            }
        }
        renderCart();
    }

    // Increase quantity
    if (target.classList.contains("increase")) {
        cartItem.quantity++;
        renderCart();
    }

    // Remove item
    if (target.classList.contains("remove") || target.closest(".remove")) {
        cart = cart.filter(
            (item) => !(item.name === name && item.price === price)
        );
        renderCart();
    }
});
