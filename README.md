# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. We converted this project from a static project to an interactive one.This project is modified in the HTML and CSS files, but primarily the JavaScript file.

This is a primary landing page which is renamed into Wild Animalsthat has a subscription form,Hightlighting on each sections while navigating and smooth scrolling with a responsive design.

This page is made interactive using the javascript.

The highlighting part on this section is the following code that will jump into the sections:

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




