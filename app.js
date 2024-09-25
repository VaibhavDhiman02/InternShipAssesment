let hamBTN = document.querySelector(".main-nav-btn");
let clossBTN = document.querySelector(".second-nav-btn");
let sencondNav = document.querySelector(".second-nav");

hamBTN.addEventListener("click" , () => {
    sencondNav.style.display = "flex";
});

clossBTN.addEventListener("click" , () => {
    sencondNav.style.display = "none";
});