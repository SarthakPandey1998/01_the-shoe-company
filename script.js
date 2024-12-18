const header = document.querySelector("#header");
const hambergerMenu= document.querySelector("#hamberger-menu");

hambergerMenu.addEventListener("click",()=>{
    // header.classList.toggle("open-menu");
    hambergerMenu.classList.toggle("active");
})