const menuBurger = document.querySelector(".menu-burger")
const menuInline = document.querySelector(".menu-inline")

menuBurger.addEventListener('click',()=>{
menuInline.classList.toggle('mobile-menu')
})