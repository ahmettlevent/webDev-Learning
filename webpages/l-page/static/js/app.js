const menu_button = document.getElementById("menu-open")
const menu = document.getElementById("menu")
const nav_bar = document.getElementById("nav-list")

// On Start Funcs
eventListeners();
windowScroll()

AOS.init();

// Func's

function eventListeners() {
  menu_button.addEventListener("click", menuControl)
  window.addEventListener("scroll", windowScroll)
}

// Event Handlers
function menuControl(e) {
  if (menu.style.height == "65vh") {
    menu.style.height = "2vh";
    menu.style.opacity = "0"
    menu_button.style.borderColor = "black";
  } else {
    menu.style.height = "65vh";
    menu.style.opacity = "1";
    menu_button.style.borderColor = "rgb(52, 131, 65)";
  }
}


function windowScroll(e) {

  if (window.scrollY > "200") {
    nav_bar.style.top = "0rem";
    nav_bar.style.opacity = "1";
  } else {
    nav_bar.style.top = "-5rem";
    nav_bar.style.opacity = ".6";

  }

}