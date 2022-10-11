const main = document.querySelector('#main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
let h1 = document.querySelector('h1');
newHeader.textContent = "Melissa is the champion";
document.body.append(newHeader);

