import data from './posts.json' assert { type: 'json' };



const para = document.createElement("p");
const node = document.createTextNode(data);
para.appendChild(node);

const container = document.getElementById('container');
container.appendChild(para);
