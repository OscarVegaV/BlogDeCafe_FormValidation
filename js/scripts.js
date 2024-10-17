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
newLink.classList.add = 'link__navegation';
//newLink.classList.add('link__navegation'); // Corrected line

// adding from Document
const navegation = document.querySelector('.navegation');

// Adding the new link to the navigation
// The appendChild() method is used to add a new child node (newLink) 
// as the last child of the specified parent node (navegation).
navegation.appendChild(newLink);

console.log(newLink);