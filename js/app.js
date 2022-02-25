//console.log('I am running!');

const form = document.querySelector('form');
const name = document.querySelector('#name');
//const name =  form.elemens['name'];


const addName = () =>{
  //var name = document.getElementById('name');
  if (name.value != '') {
    var hello = document.getElementById("hello");    
    hello.innerHTML = "Hello " + name.value + " !";
    name.value = '';
  }
};

form.addEventListener('submit', addName);

