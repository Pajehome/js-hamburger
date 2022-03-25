const hamburger = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".header-right");

navBar.addEventListener("click", () =>  {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");  
})

const close = document.querySelector(".close");

close.addEventListener("click", () =>  {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");  
})