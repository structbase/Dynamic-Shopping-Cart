const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

let inventory = [
    { name: "Apple", price: 1.29, image: "./assets/apple.png" },
    { name: "Avocado", price: 1.99, image: "./assets/avocado.png" },
    { name: "Broccoli", price: 2.49, image: "./assets/broccoli.png" },
    { name: "Butter", price: 4.49, image: "./assets/butter.png" },
    { name: "Carrot", price: 0.99, image: "./assets/carrot.png" },
    { name: "Cheese", price: 5.49, image: "./assets/cheese.png" },
    { name: "Egg", price: 0.39, image: "./assets/egg.png" },
    { name: "Grape", price: 2.99, image: "./assets/grape.png" },
    { name: "Milk", price: 3.79, image: "./assets/milk.png" },
    { name: "Onion", price: 0.79, image: "./assets/onion.png" },
    { name: "Orange", price: 1.19, image: "./assets/orange.png" },
    { name: "Peach", price: 1.49, image: "./assets/peach.png" },
    { name: "Pepper", price: 1.59, image: "./assets/pepper.png" },
    { name: "Potato", price: 0.99, image: "./assets/potato.png" },
    { name: "Strawberry", price: 3.49, image: "./assets/strawberry.png" },
    { name: "Yogurt", price: 1.19, image: "./assets/yogurt.png" },
];

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
