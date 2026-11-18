
let purchaseAmount = 120;
let discount;
let finalPrice;

if (purchaseAmount >= 100) {
    discount = 20;
}
else if (purchaseAmount >= 50) {
    discount = 10;
}
else {
    discount = 0;
}

finalPrice = purchaseAmount - (purchaseAmount * discount / 100);

console.log("Purchase Amount: $" + purchaseAmount);
console.log("Discount: " + discount + "%");
console.log("Final Price: $" + finalPrice);
