const imgContainer = document.querySelector(".image-container");
const main = document.querySelector(".main");
const images = document.querySelectorAll("img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let count = 0;
let width = 350; // Width of each image

// Next button functionality
nextBtn.addEventListener("click", () => {
    // Check if we have reached the last image
    if (count < images.length - 1) {
        count++;
    } else {
        count = 0; // Loop back to the first image
    }
    imgContainer.style.transform = `translateX(-${width * count}px)`; // Move images
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
    // Check if we have reached the first image
    if (count > 0) {
        count--;
    } else {
        count = images.length - 1; // Loop back to the last image
    }
    imgContainer.style.transform = `translateX(-${width * count}px)`; // Move images
});
