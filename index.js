// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 为什么 0.1+0.2!=0.3 因为 精度缺失
let result = Number((0.1).toString(2)) + Number((0.2).toString(2));
console.log(result);
// console.log(finalResult);
// let finalResult = 0b0.30000000000000004
console.log((9999999999999999).toString(2));
console.log(0b100011100001101111001001101111110000010000000000000000);
console.log(0.1 + 0.2);
