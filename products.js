let prods = [
    { name: "Product 1", stock: 10, price: 50 },
    { name: "Product 2", stock: 10, price: 50 },
    { name: "Product 3", stock: 10, price: 50 },
    { name: "Product 4", stock: 10, price: 50 },
    { name: "Product 5", stock: 10, price: 50 },
    { name: "Product 6", stock: 10, price: 50 }
];

function updateProductInfo(index) {
    let proddiv = document.querySelector("#pro" + (index + 1) + " .proddiv");
    proddiv.textContent = " Stock: " + prods[index].stock + ", Price: " + prods[index].price;
}

function buyProd(index) {
    if (prods[index].stock > 0) {
        prods[index].stock--;
        prods[index].price += 50; 
        updateProductInfo(index);
    } else {
        console.log("not enough.");
    }
}

function sellProd(index) {
    if (prods[index].stock < 10 && prods[index].price > 50) { 
        prods[index].stock++;
        prods[index].price -= 50; 
        updateProductInfo(index);
    } else {
        console.log("Max stok");
    }
}

let buyButtons = document.querySelectorAll(".buy-button");
let sellButtons = document.querySelectorAll(".sell-button");

buyButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        buyProd(index);
    });
});

sellButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        sellProd(index);
    });
});

