import data from './posts.json' assert { type: 'json' };


let strData = data.toString();
const para = document.createElement("p");
const node = document.createTextNode(strData);
para.appendChild(node);

const container = document.getElementById('container');
container.appendChild(para);
