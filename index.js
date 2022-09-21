// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 数组的解构赋值
// let [firstName, , , lastName] = ['jack', 'fan', 'qin', 'yun'];
// console.log(firstName, lastName);

// 对象的解构赋值
// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut'],
//   extra: true,
// };

// let {
//   size: { width: w, height: h },
//   items: [item1, item2],
//   title: t = 'demo',
// } = options;
// console.log(w, h, t, item1, item2);

// 函数的解构赋值
function fn({
  name: n = 'fanqinyang',
  sex: s,
  // items: [item1, item2, ...rest],
}) {
  console.log(n, s);
}

let options = {
  name: 'yun',
  items: ['xxx1', 'xxx2', 'xxx3', 'xxx4'],
};

fn({ items: [] });

