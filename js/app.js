
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


/*<------------build the nav--------------->*/
const navBarList=document.getElementById('navbar__list');
let nav_but =document.createElement('li');
navBarList.classList.add('navbar__menu');
for (let i = 1; i <= sections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');
    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link')
    nav_link.setAttribute('href', '#section' + i)
    nav_link.dataset.nav = 'Section '+ i;
    nav_sec.appendChild(nav_link);
    navBarList.appendChild(nav_sec);
    if ( i == 1)
    {
        nav_link.textContent = 'Lion';
    }
    else if ( i == 2)
    {
        nav_link.textContent = 'Tiger';
    }
    else if (i == 3)
    {
        nav_link.textContent = 'Fox';
    }
    else if (i == 4)
    {
        nav_link.textContent = 'Panther';    
    }


    else{
        nav_link.textContent = 'Section' + i;
    }
}

/*---------------------form---------------------*/ 
const formElement= document.querySelector('#formList')
formElement.addEventListener('submit', function (event){
    event.preventDefault();
    confirm('Form Submitted Successfully');
});
/*-------------Selecting all navElements-------------*/
const navElements = document.querySelectorAll('.navbar__menu');

/*<------------------Highting Sections and Nav--------------------->*/ 
window.addEventListener('scroll', highlightSectionAndNav )
function highlightSectionAndNav(){
    for (let i = 0; i< sections.length; i++) {
        const element = sections[i];
        const topLine = element.getBoundingClientRect().top;
        const bottomLine = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight *0.5; 
        if (topLine < windowHeight && bottomLine > windowHeight) {
            navElements[i + 2].id = 'active-sec';

            element.classList.add('your-active-class')    
        } 
        else{
            element.classList.remove('your-active-class')
            navElements[i+2].id = '';
        }
    }
}
/*<------------------Anchors--------------->*/ 
const anchors = document.querySelectorAll('a');

function jumpingToSection (e)
{
    if (e.target.nodeName == 'A')
    {
        e.preventDefault();
        console.log(e.target);
        for (let section of sections)
        {
            if (section.dataset.nav == e.target.dataset.nav)
            {
                section.scrollIntoView({behavior: "smooth", block: "start"});
            }
        }
    }
}
navBarList.addEventListener('click', jumpingToSection);

