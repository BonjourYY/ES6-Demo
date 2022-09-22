// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 模板字符串
// 多行
console.log(`123
123123
2342342
3453425`);

// 嵌入表达式
let [a, b] = [5, 10];
console.log(`a+b的结果是：${a + b}`);

// 带标签的模板字符串
let name = `JackFan`;
let age = 24;

function tag(strings, ...rest) {
  console.log(rest);
  return `${strings[0]}
${rest}
`;
}

console.log(tag`\u00A9${name}${age}and`);
