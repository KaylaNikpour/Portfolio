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
 
let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = 'Number: 2'
}

