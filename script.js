// Navigation

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const TogglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");



navToggler.addEventListener("click", toggleNav)

function toggleNav(){
    nav.classList.toggle("active")
    if (TogglerImg.src.includes("BurgerMenu")) {
        TogglerImg.src = "ressources/cross.svg";
        navToggler.ariaExpanded = true;
    }
    else {
        TogglerImg.src = "ressources/BurgerMenu.svg";
        navToggler.ariaExpanded = false;
    }
}

function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.id=="myButton1") console.log('afficher soft');
    
}
function handleSmoothScroll(e) {
  e.preventDefault();

  const linkHref = e.target.getAttribute("href").substring(1);
 
  window.scrollTo({
    top: document.getElementById(linkHref).offsetTop * 0.95,
    behavior: "smooth"
  })

  window.history.pushState("", "", `${document.location.pathname}#${linkHref}`)
}
// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['a.png', 'b.png', 'c.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
  console.log('i')
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "ressources/menu/"+images[i]);
	
}