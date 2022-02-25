//console.log('I am running!');

const form = document.querySelector('form');
const name = document.querySelector('#name');
const hello = document.querySelector("#hello");    



const addName = e =>{
  //var name = document.getElementById('name');
  if (name.value) {
    hello.textContent = "Hello " + name.value + " !";
    name.value = '';
  }
  e.preventDefault();
};

form.addEventListener('submit', addName);

