// Selecting elements using three different methods: querySelector, querySelectorAll, and getElementById

//  ** querySelector **
// Selects the first <h2> element within an element with the class 'text__header'
const heading = document.querySelector('.text__header h2');   //return 0 or 1 Elements
heading.textContent = 'Nuevo Heading';// Change the text content of the selected element
// heading.classList.add('new-class');  // Uncomment to add a new class to the HTML element


//  ** querySelectorAll **
// Selects all <a> elements that are children of the element with the class 'navegation'
const links = document.querySelectorAll('.navegation a');   // retunr all elements witch class Father itself navegation and tag a
console.log(links);// Logs a NodeList of all <a> elements found

console.log(links[0]); // Logs the first <a> element found
links[0].textContent = 'Nuevo Texto para Enlace';// Change the text content of the first link
links[0].classList.add('new-class');// Adds a new class to the first link
// links[0].classList.remove('link__navegation'); // Removes the old class from the first link

//  ** querySelectorById **
// Selects the element with the ID 'heading' (considered an older method)

/*const heading2 = document.getElementById('heading');
console.log(heading2);// Logs the element with the ID 'heading'*/

//Generating a new link 

// this code makes an HTML link element
const newLink = document.createElement('A');

//adding href
newLink.href ='new-link.html';

// adding text
newLink.textContent = 'Un Nuevo Enlace';

//adding class
//newLink.classList.add = 'link__navegation';
newLink.classList.add('link__navegation'); // Corrected line

// adding from Document
const navegation = document.querySelector('.navegation');

// Adding the new link to the navigation
// The appendChild() method is used to add a new child node (newLink) 
// as the last child of the specified parent node (navegation).
navegation.appendChild(newLink);

console.log(newLink);


//Events

console.log(1);// Logs '1' in the console immediately when the script loads

// The window waits for the entire page to be fully loaded (including CSS and images)
window.addEventListener('load', function () {  
  console.log(2);  // Logs '2' once all resources of the page have been loaded
});

// The following line of code is equivalent to the above, using the onload method
window.onload = function () {
  console.log(3); // Logs '3' when the complete loading of the page is finished
};

// This event fires when the HTML has been fully loaded,
// but does not wait for images or CSS to finish loading
document.addEventListener('DOMContentLoaded', function () {
  console.log(4); // Logs '4' once the HTML has been loaded and parsed
})

console.log(5); // Logs '5' immediately, before other events are completed


// Function to detect window scroll
window.onscroll = function (event) {
  console.log(event);  // Logs the scroll event every time the page is scrolled
};


/*1
// Selecting the button element and associating a click event
// *** Important: this is also useful for images or text.

const btnSend = document.querySelector('.primary--button');

btnSend.addEventListener('click', function (event) {
  console.log(event); // Logs the click event object
  event.preventDefault();// Stops the default behavior of the event, such as submitting a form before checking validation.

  console.log('enviando formulario');// Custom message to confirm event handling
});
*/

// Event type: Submit (useful for forms).
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  //            ** validate the form  **

  //destructuring
  const {name, email, message } = data;

  // Clean before messages
  const existingAlerts = form.querySelectorAll('p.formError, p.formSent');
  existingAlerts.forEach(alert => alert.remove());

    // Validate the form fields
  if (name === '' || email === '' || message === '') {
    //displayError('Todos los Campos Son obligatorios');// refacturing code
    displayAlert('Todos los Campos Son obligatorios', true);
    return; //breackpoit ejecuting of code
  };

  //Validate the email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    displayAlert('El email no es válido', true);
    return;
  };
  
//            **  Successful submission   **
  //displaySuccess('todos los datos se han enviado'); // refacturing code
  displayAlert('todos los datos se han enviado');
});


// Events for inputs and textareas
// Object to hold form data

const data = {
  name: '',
  email: '',
  message: ''
};

// Selecting input elements using querySelector
const inputName = document.querySelector('#name'); //Input field for name
const inputEmail = document.querySelector('#email'); // Input field for email
const inputMessage = document.querySelector('#message'); //Input field for message

inputName.addEventListener('change', function () {
  console.log('Typing....'); // Logs 'Typing' when the input value changes
});



// 'input' event is better for capturing real-time changes
inputName.addEventListener('input', function (e) {
  console.log(e); // Logs 'diferent' when the input value changes
});

/*// this event es better than change // But if you need more evente is beter use the code down
inputName.addEventListener('input', function (e) {
  console.log(e.target.value);  // Logs the value that is being typed in the name field
});*/

// Using the 'input' event to track changes in all fields
inputName.addEventListener('input', readText); // Track changes in name field
inputEmail.addEventListener('input', readText);  // Track changes in email field
inputMessage.addEventListener('input', readText); // Track changes in message field


// Function to read input text and store it in the data object
function readText(e) {
  // console.log(e.target.value);
  data[e.target.id] = e.target.value;// Store the input value in the data object
  console.log(data);// Log the updated data object
};



// refacturing code
function displayAlert(message, error = null) {
  const alert = document.createElement('P');// make a <P> into Html
  alert.textContent = message;

  if(error){
    alert.classList.add('formError');
  } else{
    alert.classList.add('formSent');
  };

  form.appendChild(alert);

  //Removing after 5 seconds
 setTimeout(() => {
  alert.remove();
 }, 5000);

 // Clear the form fields after success
  inputName.value = '';
  inputEmail.value = '';
  inputMessage.value = '';
 
};

/*
//Display an error in Message
function displayError(message) {

  const existingError = document.querySelector('.formError');
  if (existingError) return; // Prevent duplicate error messages

  //display an error message
  //const error = document.createElement('P');     // refacturing code
  //error.textContent = message;// refacturing code
  //error.classList.add('formError');// refacturing code

  form.appendChild(error);

 //Removing after 5 seconds
 setTimeout(() => {
  error.remove();
 }, 5000);

}; 
*/

/*
function displaySuccess(message) {

  //sentMessage.textContent = message;      // refacturing code
  //sentMessage.classList.add('formSent');  // refacturing code

  //form.appendChild(sentMessage); // refacturing code
  //form.appendChild(alert);  //refacturing code

  // Removing after 10 sec
 // setTimeout(() => {
  //  sentMessage.remove();
 // }, 10000);

  // Clear the form fields after success
  inputName.value = '';
  inputEmail.value = '';
  inputMessage.value = '';
  
};
*/


