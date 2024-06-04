import data from './posts.json' assert { type: 'json' };
const sample = require('./posts.json');
console.log(sample);
console.log(sample.posts);
console.log(data.posts);
for (let x in data.posts) {
   console.log(x.name)
   console.log(x.date)
}
const para = document.createElement("p");
const node = document.createTextNode('gorp');
para.appendChild(node);

const container = document.getElementById('container');
container.appendChild(para);
