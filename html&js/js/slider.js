let vw = window.innerWidth;
const pageSelector = document.getElementById("sliderPageSelector");
const pageOptions = document.querySelectorAll(".page-option");
const slider = document.getElementById("slider");

window.addEventListener("load", () => {
    let vw = window.innerWidth;
})

pageOptions.forEach((pageOption) => {
    pageOption.addEventListener("click", (e) => {
        const selectedPage = e.target.value;
        if(parseInt(vw) >= 768) {     
            if(selectedPage === "1") {
                slider.style.right = "0";
            } else if(selectedPage === "2") {
                slider.style.right = "calc(50% + 3vw)";
            }
        } else {
            if(selectedPage === "1") {
                slider.style.right = "0";
            } else if(selectedPage === "2") {
                slider.style.right = "100vw";
            } else if(selectedPage === "3") {
                slider.style.right = "200vw";
            }
        }
    })
})