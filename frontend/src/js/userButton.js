
let downBtn = document.getElementById("fa-circle-chevron-down");
//let downBtn = document.querySelector(".fa-circle-chevron-down");
let upBtn = document.getElementById("fa-circle-chevron-up");
let hiddenMyPage = document.getElementById("hiddenMyPage");

downBtn.addEventListener("click", show());
/*
upBtn.addEventListener('click', ()=>{
    hiddenPage.style.display = 'none';
    downBtn.style.display = '';
    upBtn.style.display = 'none';
});*/

function show() {
    if(upBtn.style.display == "none") {
        alert("클릭");
        upBtn.style.display = "block";
    
    }
    //hiddenPage.style.display = '';
    //upBtn.style.display = '';
    //downBtn.style.display = 'none';
}
