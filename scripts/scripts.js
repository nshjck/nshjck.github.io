import data from './posts.json' assert { type: 'json' };
const datar = data;
console.log(datar);
datar.forEach(myFunction);
function myFunction(value) {
  console.log(value);
}

let strData = data.toString();
const para = document.createElement("p");
const node = document.createTextNode('gorp');
para.appendChild(node);

const container = document.getElementById('container');
container.appendChild(para);
