const mqSm = window.matchMedia("(max-width: 576px)");


let minmax = document.getElementsByClassName("tms-sidebar")[0];
let arrowf = document.getElementsByClassName("arrow_forward")[0];
let arrowb = document.getElementsByClassName("arrow_back")[0];

let sidebarAnchors = document.querySelectorAll('.tooltip');
let hamburger = document.getElementById("tms-hamburger");

let avatar = document.getElementsByClassName("tms-login-info")[0];
let logout = document.getElementsByClassName("tms-logout")[0];

tooltips = null;

function toggleMenu(){
    
    if(minmax.classList.contains("minimized")){
        minmax.classList.remove("minimized");
        minmax.classList.add("maximized");

        sidebarAnchors.forEach(element => {
            element.classList.remove("tooltipped");
        });
        tooltips.forEach(tt => {
            tt.destroy();
        });

    } else if(minmax.classList.contains("maximized")){
        minmax.classList.remove("maximized");
        minmax.classList.add("minimized");

        sidebarAnchors.forEach(element => {
            element.classList.add("tooltipped");
        });
        tooltips = M.Tooltip.init(sidebarAnchors, {
             "margin": -5
        });
    }
}

arrowf.addEventListener("click", ()=>{
    toggleMenu();
})
arrowb.addEventListener("click", ()=>{
    toggleMenu();
})

hamburger.addEventListener("click", ()=>{
    if(minmax.style.display == "") {
        minmax.style.display = "flex";
    } else {
        minmax.style.display = "";
    }
});
sidebarAnchors.forEach((a)=>{
    if(mqSm.matches){
        a.addEventListener("click", ()=>{
            minmax.style.display = "";
        })
    }
});

avatar.addEventListener("click", ()=>{
    logout.style.display = "block";
});
logout.addEventListener("click", ()=>{
    logout.style.display = "none";
});