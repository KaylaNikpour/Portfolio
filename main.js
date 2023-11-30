console.log('Hello, World!');

document.getElementById("year").innerHTML = new Date().getFullYear();


function onButtonClick() {
    alert('I hope you are having the most beautiful day :)');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);

// Ad a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.text = 'Click me!';
  button.style.backgroundColor = 'blue';
  changeText.textContent = 'Click me!';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '';
  changeText.textContent = 'Hover over me!'
});
const changeText = document.querySelector("button");
 
