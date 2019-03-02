//alert("CONNEDTED!");
let dogImages = [
  'url("resources/img/dogs/dog1.jpg")',
  'url("resources/img/dogs/dog2.jpg")',
  'url("resources/img/dogs/dog3.jpg")',
  'url("resources/img/dogs/dog4.jpg")',
  'url("resources/img/dogs/dog5.jpg")',
  'url("resources/img/dogs/affenpinscher.jpg")',
];

let dogs = document.querySelectorAll(".picture-container");
let answer = dogImages[5];
let dogBreed = document.getElementById("dog-breed");

const startIndex = "/dogs/";
const endIndex = ".";
let dogDisplay = answer.slice(answer.indexOf(startIndex) + startIndex.length, answer.indexOf(endIndex));
let capitalize = dogDisplay.charAt(0).toUpperCase() + dogDisplay.substr(1);

console.log(dogDisplay);
let messageDisplay = document.querySelector("#message");

dogBreed.textContent = capitalize;

for (let i = 0; i < dogImages.length; i++) {
  // Add initial images
  dogs[i].style.backgroundImage = dogImages[i];

  dogs[i].addEventListener("click", function() {
    // alert("clicked an image");
    let clickedImage = this.style.backgroundImage;
    console.log(clickedImage + " " + answer);


    const displayMessage = document.getElementById("message");
    displayMessage.parentElement.style.display = "inline";
    if (clickedImage === answer) {
      messageDisplay.textContent = "Correct";
    } else { 
      messageDisplay.textContent = "Try again";
    } 
  });
}


// ====================
// GETELEMENTBYID
// ====================
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);

// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";

const displayCurrentLevel = document.getElementById("current-level");
console.log(displayCurrentLevel);
let currentLevel = 1;
currentLevel++;
displayCurrentLevel.textContent = currentLevel;

const displayCurrentLives = document.getElementById("current-lives");
let currentLives = 3;
displayCurrentLives.textContent = currentLives;
