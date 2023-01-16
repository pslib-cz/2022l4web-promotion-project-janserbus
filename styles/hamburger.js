const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar__menu")


hamburger.addEventListener("click", () =>{    
    hamburger.classList.toggle("active");        
    menu.classList.toggle("active");
});
