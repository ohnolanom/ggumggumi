let togBg= document.getElementById("toggleBG");
let togFg= document.getElementById("toggleFG");
togBg.addEventListener('click', toggleAction);

function toggleAction(){
    let left = togFg.style.left;
    if(left=="2px"){
        togBg.style.border = "#009FE3 solid 2px";
        togFg.style.background = "#009FE3";
        togFg.style.left = "22px";
    } else {
        togBg.style.border = "#909090 solid 2px";
        togFg.style.background = "#909090";
        togFg.style.left = "2px";
    }
    
}