let units = 150;
let totalBill = 0;

if (units <= 50) {
    totalBill = units * 5;
} else if (units <= 100) {
    totalBill = (50 * 5) + ((units - 50) * 7);
} else if (units <= 200) {
    totalBill = (50 * 5) + (50 * 7) + ((units - 100) * 10);
} else {
    totalBill = (50 * 5) + (50 * 7) + (100 * 10) + ((units - 200) * 12);
}

console.log(totalBill);