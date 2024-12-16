const  imgcontainer = document.querySelector(".image-container");
const main = document.querySelector(".main");
const image = document.querySelector("img");
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev")

let count = 0;
let width = 350;

nextbtn.addEventListener("click" , () =>{

   imgcontainer.style.transform = `-translateX(${width*count} "px")`

})