console.log('Hello, World!');
// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

//button click 
function onButtonClick() {
    alert('I hope you are having the most beautiful day :)');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);

// Button hover
button.addEventListener('mouseover', () => {
  button.style.text = 'Click me!';
  button.style.backgroundColor = 'blue';
  changeText.textContent = 'Click me!';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
  changeText.textContent = 'Hover over me!'
});
const changeText = document.querySelector("button");
 
// number

let count = 1;
const txtCounter = document.getElementById('txt-counter');

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;

  
  if (count % 2 == 0) {
    txtCounter.innerHTML = count;
    txtCounter.style.color = 'pink';
    txtCounter.classList.remove('odd');
    txtCounter.classList.add('even');
 } else {
    txtCounter.innerHTML = count;
    txtCounter.style.color = 'blue';
    txtCounter.classList.remove('even');
    txtCounter.classList.add('odd');
 }
};

//loop

const numbersList = document.getElementById('numbers');

for (let i = 0; i <= 100; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
  numbersList.appendChild(listItem);


}



