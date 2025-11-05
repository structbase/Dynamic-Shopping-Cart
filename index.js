const cardContainer = document.getElementById("card-container");

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

preset.forEach((item) => {
    const cardHTML = `
    
    <div class="card" style="width: 10rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}" />
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Price: $${item.price.toFixed(2)}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    `;

    // Add the card to the container
    cardContainer.innerHTML += cardHTML;
});

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
