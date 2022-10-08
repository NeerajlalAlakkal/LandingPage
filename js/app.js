
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const sections = document.querySelectorAll('section');


// build the nav
const navBarList=document.getElementById('navbar__list');
let nav_but =document.createElement('li');
// Add class 'active' to section when near top of viewport
navBarList.classList.add('navbar__menu');
for (let i = 1; i <= sections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');
    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link')
    // nav_link.setAttribute('', '#section' + i);
    nav_link.dataset.nav = 'Section ' + i;
    nav_sec.appendChild(nav_link);
    navBarList.appendChild(nav_sec);
    if ( i == 1)
    {
        nav_link.textContent = 'Section 1';
    }
    else if ( i == 2)
    {
        nav_link.textContent = 'Section 2';
    }
    else if (i == 3)
    {
        nav_link.textContent = 'Section 3';
    }
    else if (i == 4)
    {
        nav_link.textContent = 'Section 4';    
    }


    else{
        nav_link.textContent = 'Section' + i;
    }
}
//element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

const formElement= document.querySelector('#formList')
formElement.addEventListener('submit', function (event){
    event.preventDefault();
    confirm('Form Submited Successfully');
});
window.addEventListener('scroll', highlightSectionAndNav )
function highlightSectionAndNav(){
for (let index = 0; index < sections.length; index++) {
    const element = sections[index];
    const topLine = element.getBoundingClientRect().top
    const bottomLine = element.getBoundingClientRect().bottom
    const windowHeight = window.innerHeight * 0.5 
    if (topLine < windowHeight && bottomLine > windowHeight) {
    return element.classList.add('your-active-class')    
    } 
    element.classList.remove('your-active-class')
}
}
const anchors = document.querySelectorAll('a');

for (let index = 0; index < anchors.length; index++) {
    const anchorElement = anchors[index];
  
anchorElement.addEventListener('click', function(event){
const data = event.target.dataset.nav
const element = document.querySelector(`section[data-nav='${data}']`)
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});   
})    
    
}

//We need to select all the sections
 // Loop through all sections.Check if the section is in view.
// If it is in view at the class 'your-active-class', IF ITS NOT IN VIEW we need to remove it.


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


