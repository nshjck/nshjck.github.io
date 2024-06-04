import data from './posts.json' assert { type: 'json' };

console.log(data);
for (let x in data.posts) {
   console.log(x)
}
const para = document.createElement("p");
const node = document.createTextNode('gorp');
para.appendChild(node);

const container = document.getElementById('container');
container.appendChild(para);
