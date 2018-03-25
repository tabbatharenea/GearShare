var soundPop=document.getElementById("pop");
var soundSwipe=document.getElementById("swipe");
var soundTink=document.getElementById("tink");

var imgContainer = document.getElementById("imgContainer");

var audioBox = document.querySelector("#audio");
var photoBox = document.querySelector("#photo");

var header = document.querySelector("header");

var active;

var photoGrid = document.getElementById("photoGrid");



var photoGridImg = document.querySelectorAll(".photoGridImg");

function returnHome() {
    if (active !== "home"){
    imgContainer.classList.remove("moveOutLeft");
    imgContainer.classList.remove("moveOutRight");
    imgContainer.style.display = "flex";
    photoGrid.classList.remove("moveInLeft");
    photoGrid.style.display = "none";
    swipe.play();};
    active = "home";
};

function audioFunc(){
   swipe.play();
   this.style.transform = "scale(1)";
   imgContainer.classList.add("moveOutLeft");
   active = "audio";
};

function photoFunc() {
    swipe.play();
    this.style.transform = "scale(1)";
    imgContainer.classList.add("moveOutRight");
    photoGrid.style.display = "flex";        photoGrid.classList.add("moveInLeft");

    setTimeout(function(){imgContainer.style.display = "none";}, 900);

    active = "photo";
};



function displayPhoto(){
if (active = "photo"){
    photoGrid.style.display = "flex";
    } else if (active !== "photo"){
        photoGrid.style.display = "none"
    };
};

function scaleUp(){
    pop.play();
    this.style.transform = "scale(1.1)";
};

function scaleDown() {
    this.style.transform = "scale(1)";
};

header.addEventListener("click", returnHome);

photoBox.addEventListener("mouseenter", scaleUp);
audioBox.addEventListener("mouseenter", scaleUp);

photoBox.addEventListener("mouseout", scaleDown);
audioBox.addEventListener("mouseout", scaleDown);

photoBox.addEventListener("click", photoFunc);
audioBox.addEventListener("click", audioFunc);

//photo page


function imgHover(){
    pop.play();
}
// photoGridImg.addEventListener("click", imgHover);
// photoGridImg.addEventListener("mouseenter", imgHover);