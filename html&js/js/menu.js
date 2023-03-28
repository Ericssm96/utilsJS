const toggleBtn = document.getElementById("toggleBtn");
const navMenu = document.getElementById("navMenu");
let menuUp = true;

toggleBtn.addEventListener("click", ()=>{
    if(menuUp) {
        navMenu.classList.remove("-mt-[220px]");
        navMenu.classList.add("mt-[70px]");
        toggleBtn.classList.add("rotate-90");
    } else {
        navMenu.classList.remove("mt-[70px]");
        navMenu.classList.add("-mt-[220px]");
        toggleBtn.classList.remove("rotate-90");
    }
    menuUp = !menuUp;
});