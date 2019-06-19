"use strict"

const wrapper = document.getElementsByClassName("wrapper")[0];
const ball = document.getElementsByClassName("ball")[0];

// const bgColor= document.querySelector("input[name=outer]:checked")
// .value;
// const innerColor = document.querySelector("input[name=inner]:checked")
// .value;

const backgroundColor = document.getElementById("wrapperB");
const color = document.getElementById("ballC");
const circle = document.getElementById("circle");
const background = document.getElementById("background");
const speed = document.getElementById("speed");
const radius = document.getElementById("radius");




ball.style.animationDuration = "1.5s";

color.onchange = function () {
    const ballColor = color.value;
    ball.style.backgroundColor = ballColor;
}


backgroundColor.onchange = function () {
    const wrapperColor = backgroundColor.value;
    wrapper.style.backgroundColor = wrapperColor;
}



circle.onchange = function(){
const image = document.createElement("img");
image.src = circle.value;
ball.appendChild(image);
image.classList.add("ballImage")
}


background.onchange = function(){
    const imageWrapper = document.createElement("img");
    imageWrapper.src = background.value;
    wrapper.appendChild(imageWrapper);
    imageWrapper.classList.add("wrapperImage")
    }


speed.onchange = function(){
   const speedChange = speed.value;
   ball.style.animationDuration = speedChange + "s";
}

radius.onchange = function(){
    const radiusValue = radius.value;
    ball.style.width = radiusValue + "px";
    ball.style.height = radiusValue + "px";
}