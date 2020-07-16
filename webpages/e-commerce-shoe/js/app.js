const navbar_button = document.getElementById("usebar-button")
const navbar_menu = document.getElementsByClassName("user-bar")[0]
const menu_control = document.querySelector("main")

const product_menu_button = document.getElementById("product-menu-button")
const products = document.getElementById("products")

EventListeners()

function EventListeners() {
    navbar_button.addEventListener("click", openNavMenu)
    menu_control.addEventListener("mouseout", closeMenus, false)
    product_menu_button.addEventListener("click", openProductMenu, false)
}





function openProductMenu() {
    if (products.style.display == "block") {
        products.style.display = "none"
    } else {
        products.style.display = "block"
    }
}

function openNavMenu() {
    if (navbar_menu.style.display == "block") {
        navbar_menu.style.display = "none"
    } else {
        navbar_menu.style.display = "block"
    }

}

function closeMenus(params) {
    navbar_menu.style.display = "none"
    products.style.display = "none"

}