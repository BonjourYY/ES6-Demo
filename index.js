// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let billion = 0x1e1b0;
console.log(billion);
// let num = 123312;
console.log((123312).toString(36));

// 关于舍入的方法
let num = -1.5;
// 向下舍入
console.log(Math.floor(num));

// 向上舍入
console.log(Math.ceil(num));

// 四舍五入
// 恰好等于0.5时，往正无穷（+∞）方向上舍入
console.log(Math.round(num));

// 直接去除
console.log(Math.trunc(num));
