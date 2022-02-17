const n = 150.86
console.log(typeof n);

console.log(parseFloat(n));
console.log(parseInt(n));

const num = "3.12345"
console.log(typeof Number(num));

const a = "hello"
console.log(Number(a));

const price = 150.9
console.log(price.toFixed(3));
console.log(price.toExponential(1));
console.log(price.toPrecision(2));

let currency = new Intl.NumberFormat("ID", {style: "currency", currency: "IDR"}).format(price)
console.log(currency);

console.log(isNaN(price));
console.log(isNaN("price"));