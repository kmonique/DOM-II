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
    console.log(event);
}

const displayNone = function (){
    this.style.display = "none";
    console.log(event);
}

const colorLavender = function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.padding = "10px";
    console.log(event);
}

const highlightYellow = function (event){
    this.style.backgroundColor = "yellow";
    console.log(event);
}
const highlightOrange = function (event){
    event.stopPropagation();
    this.style.backgroundColor = "orange";
    this.style.padding = "30px";
    console.log(event);
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