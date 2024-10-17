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


// Selecting the button element and associating a click event
const btnSend = document.querySelector('.primary--button');
//
btnSend.addEventListener('click', function (event) {
  console.log(event); // Logs the click event object
  event.preventDefault();// Stops the default behavior of the event, such as submitting a form before checking validation.

  console.log('enviando formulario');// Custom message to confirm event handling
});