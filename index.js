const cardContainer = document.getElementById("card-container");
const addProduct = document.getElementById("add-product");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");

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

        console.log(`Added to cart: ${name}  $${price.toFixed(2)}`);
    }
});

// event listener for your input item
addProduct.addEventListener("click", () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);


})

// Function to update the total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
    const item = event.target.closest("li");
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}
