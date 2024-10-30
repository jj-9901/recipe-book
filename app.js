const navBar=document.querySelector(".nav-bar");
const woody=document.querySelector(".woody");
const ellipsis=document.querySelector(".fa-ellipsis");
const heading=document.querySelector("#repeat");

function crossClicked(){
navBar.classList.remove("nav-right");
woody.classList.remove("woody-left");
navBar.classList.add("nav-left");
woody.classList.add("woody-right");
setTimeout(() => {
    ellipsis.classList.remove("invisible");
}, 500);
}

function ellipsisClicked(){
ellipsis.classList.add("invisible");
setTimeout(()=>{
    navBar.classList.remove("nav-left");
    woody.classList.remove("woody-right");
    navBar.classList.add("nav-right");
    woody.classList.add("woody-left");
},300);
}


let i=0;
var nameHere='Recipe Book';
function typing(){
    if(i<nameHere.length){
        heading.innerHTML+=nameHere.charAt(i);
        i++;
        setTimeout(typing,300);
    }
    else{
        setTimeout(()=>{
            heading.removeAttribute("id");
        },750)
        
    }
    // heading.removeAttribute("id");
}
// str literal
typing(); 


// document.addEventListener("DOMContentLoaded",