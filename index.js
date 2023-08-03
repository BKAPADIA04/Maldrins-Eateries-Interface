'use strict';

// Preload 
const preloader_id = document.getElementById('preload');
window.addEventListener("load",()=>
{
    preloader_id.classList.add("loaded");
    document.body.classList.add("loaded"); 
});
// const preload_time = setTimeout(preloading_time,3000);
// const hero_section = document.querySelector('.hero');
// const slider_item = document.querySelector('.active.slider-item');
// function preloading_time()
// {
//     preloader_id.classList.add("loaded");
//     document.body.classList.add("loaded"); 
//     hero_section.classList.add('.active');
// }   
//Preload End

// Toggle Button For Responsiveness
const toggle_button = document.querySelector('.toggle_btn');
const toggle_button_icon = document.querySelector('.toggle_btn i');
const drop_down_menu = document.querySelector('.dropdown_toggle');
const slider_item = document.querySelector('.active.slider-item');
toggle_button.onclick = function()
{
    drop_down_menu.classList.toggle('active');
    const opened_state = drop_down_menu.classList.contains('active');
    if(opened_state)
    {
        toggle_button_icon.classList = 'fa-solid fa-x fa-fade fa-xl';
        slider_item.classList.remove('active');
        // drop_down_menu.style.animation = "transform 500ms ease";
    }
    else
    {
        toggle_button_icon.classList = 'fa-solid fa-bars fa-fade fa-xl';
        slider_item.classList.add('active'); 
        // drop_down_menu.style.animation = "transform_back 500ms ease";
    }
}

//Sticky Navbar
const navbar_ele = document.querySelector('.navbar');
const hero_ele = document.querySelector('.hero-slider');
const hero_ele_top = hero_ele.offsetTop;
function myFunction() {
    if (window.scrollY >= hero_ele_top-40) {
    // navbar_ele.classList.add("sticky");
    // navbar_ele.style.position = "sticky";
    // hero_ele.style.position = "absolute";
    // hero_ele.style.left = "30%";
    // hero_ele.style.top = "30%";
    } else {
    // navbar_ele.classList.remove("sticky");
    // navbar_ele.style.position = "relative";
    // hero_ele.style.top = "30%"; 
    }
  }

window.addEventListener("scroll",function()
{
    navbar_ele.classList.toggle("sticky",window.scrollY > 60);
});


//Onscroll Reveal
window.addEventListener("scroll",reveal);
function reveal()
{
    var reveals = document.querySelectorAll('.reveal');
    for(let i=0;i<reveals.length;i++)
    {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 30;

        if(revealTop < windowheight - revealpoint)
            reveals[i].classList.add('active');
        else
            reveals[i].classList.remove('active'); 
    }
}

