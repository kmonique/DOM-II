// Your code goes here
//grab items
const anchorElements = document.querySelectorAll("a");
const headerElement = document.querySelector("header");
const navElements = document.querySelectorAll("nav");
const paraElements = document.querySelectorAll("p");
const imgElements = document.querySelectorAll("img");
const h1Element = document.querySelector("h1");

//function declorations for changes
const reset = function () {
    this.style = "";
}

const displayNone = function (){
    this.style.display = "none";
}

const colorLavender = function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.padding = "10px";
}

const highlightYellow = function (event){
    this.style.backgroundColor = "yellow";
}
const highlightOrange = function (event){
    event.stopPropagation();
    this.style.backgroundColor = "orange";
    this.style.padding = "30px";
}

//event listeners for actions
anchorElements.forEach ((anchor) => {
    anchor.addEventListener("mouseover", colorLavender);
    anchor.addEventListener("mouseleave", reset);
})

headerElement.addEventListener("dblclick", highlightYellow);

navElements.forEach ((nav) => {
    nav.addEventListener("dblclick", highlightOrange);
})

//grab middle section
const middleImgs = document.querySelectorAll("div .img-content");
const middleText = document.querySelectorAll("div .text-content");

//create a new class for drag and drop sections
middleImgs.forEach((img) => {
    img.classList.add("dropzone");
})
middleText.forEach((p) => {
    p.classList.add("dropzone");
})

//grab drag and drop classes
const dragAndDrop = document.querySelectorAll("div .dropzone");

//for each to add event listeners
dragAndDrop.forEach((box) => {
    box.addEventListener("dragstart", drag);
    box.addEventListener("dragover", allowDrop);
    box.addEventListener("dragleave", reset);
    box.addEventListener("dragend", reset);
    box.addEventListener("drop", drop);
})

console.log(dragAndDrop);

function allowDrop (e) {
    e.preventDefault();
    this.style.backgroundColor = "yellow";
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.alt);
    console.log("drag", e);
}

function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    this.style.backgroundColor = "";
    if(data === "Let's go on an adventure!") {
        this.parentNode.style.flexDirection = "row-reverse";
    }
    if (data === "Lets have fun!"){
        this.parentNode.style.flexDirection = "row-reverse";
        console.log(this);
    }
}