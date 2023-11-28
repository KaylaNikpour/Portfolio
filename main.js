console.log('Hello, World!');

document.getElementById("year").innerHTML = new Date().getFullYear();


function onButtonClick() {
    alert('If you like Twilight too then we can be friends!');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', () => {
    alert('New button clicked!');
  });

 
      