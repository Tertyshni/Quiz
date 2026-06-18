"use strict"
const order = [];

while (true) {
    const answer = prompt("Бажаєте додати товар? (так/ні)").toLowerCase();

    if (answer === "ні") {
        break;
    }

    if (answer === "так") {
        const productName = prompt("Оберіть товар: Кола або Піца").toLowerCase();
        const size = prompt("Оберіть розмір: S або M").toLowerCase();
        const price = Number(prompt("Введіть ціну товару"));

        const item = {
            name: productName,
            size: size,
            price: price
        };

        order.push(item);
    }
}

const productCount = {};
let Sum = 0;
let pizzaSum = 0;
let colaSum = 0;

for (const item of order) {
    Sum += item.price;

    productCount[item.name] = (productCount[item.name] || 0) + 1;

    if (item.name === "піца") {
        pizzaSum += item.price;
    }

    if (item.name === "кола") {
        colaSum += item.price;
    }
}

console.log("===== ЗАМОВЛЕННЯ =====");

for (const product in productCount) {
    console.log(`${product}: ${productCount[product]} шт.`);
}

console.log(`Загальна сума замовлення: ${Sum} грн`);
console.log(`Сума за піци: ${pizzaSum} грн`);
console.log(`Сума за колу: ${colaSum} грн`);