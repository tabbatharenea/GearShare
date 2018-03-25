var soundPop=document.getElementById("pop");
var soundSwipe=document.getElementById("swipe");
var soundTink=document.getElementById("tink");

var imgContainer = document.getElementById("imgContainer");

var audioBox = document.querySelector("#audio");
var photoBox = document.querySelector("#photo");

var header = document.querySelector("header");

var active;

var photoGrid = document.getElementById("photoGrid");





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





// function displayPhoto(){
// if (active = "photo"){
//     var gridImg = document.getElementsByClassName("gridImg");
//     scaleUP(gridImg);
// };

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


// function imgHover(){
//     pop.play();
//     this.style.transform ="scale(1.2)";
// }

var gridImg = document.querySelectorAll(".gridImg");

for (var i = 0 ; i < gridImg.length; i++) {
    gridImg[i].addEventListener('mouseenter' , scaleUp); 
 }

 for (var i = 0 ; i < gridImg.length; i++) {
    gridImg[i].addEventListener('mouseout' , scaleDown); 
 }

// gridimg.addEventListener("click", imgHover);
// photoGridImg.addEventListener("mouseenter", imgHover)