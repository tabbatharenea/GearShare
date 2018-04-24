//sounds
var soundPop=document.getElementById("pop");
var soundSwipe=document.getElementById("swipe");
var soundTink=document.getElementById("tink");

//home page vars
var imgContainer = document.getElementById("imgContainer");
var audioBox = document.querySelector("#audio");
var photoBox = document.querySelector("#photo");
var header = document.querySelector("header");
var active;

//photo page vars
var photoGrid = document.getElementById("photoGrid");
var gridImg = document.querySelectorAll(".gridImg");


//get back to the home/first screen
function returnHome() {
    if (active == "photo"){
    //first move grid out
    swipe.play();
    photoGrid.classList.remove("moveInLeft");
    photoGrid.classList.add("moveOutRight");
    setTimeout(function(){
        photoGrid.style.display = "none";}, 2000);

    //then bring back home page container
    setTimeout(function(){
        imgContainer.style.display = "flex";
        imgContainer.classList.remove("moveOutLeft");
        imgContainer.classList.remove("moveOutRight");
        }, 1500);
    }
    //then set the active area back to home
    active = "home";
};

//if we click on audio...
function audioFunc(){
   swipe.play();
   this.style.transform = "scale(1)";
   imgContainer.classList.add("moveOutLeft");
   active = "audio";
};

//if we click on photo..
function photoFunc() {
    swipe.play();
    this.style.transform = "scale(1)";
    imgContainer.classList.add("moveOutRight");
    photoGrid.style.display = "flex";        
    photoGrid.classList.add("moveInLeft");

    setTimeout(function(){
        imgContainer.style.display = "none";}, 900);

    active = "photo";
};

//site wide hover effect
function scaleUp(){
    pop.play();
    this.style.transform = "scale(1.1)";
};

//un-hover
function scaleDown() {
    this.style.transform = "scale(1)";
};

//home page events
header.addEventListener("click", returnHome);
photoBox.addEventListener("mouseenter", scaleUp);
audioBox.addEventListener("mouseenter", scaleUp);

photoBox.addEventListener("mouseout", scaleDown);
audioBox.addEventListener("mouseout", scaleDown);

photoBox.addEventListener("click", photoFunc);
audioBox.addEventListener("click", audioFunc);

//photo page events


for (var i = 0 ; i < gridImg.length; i++) {
    gridImg[i].addEventListener('mouseenter' , scaleUp); 
 }

 for (var i = 0 ; i < gridImg.length; i++) {
    gridImg[i].addEventListener('mouseout' , scaleDown); 
 }
