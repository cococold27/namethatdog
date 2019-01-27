//alert("CONNEDTED!");
let dogImages = [
  "url(\"resources/img/dog1.jpg\")",
  "url(\"resources/img/dog2.jpg\")",
  "url(\"resources/img/dog3.jpg\")",
  "url(\"resources/img/dog4.jpg\")",
  "url(\"resources/img/dog5.jpg\")",
  "url(\"resources/img/dog6.jpg\")",
];

let dogs = document.querySelectorAll(".picture-container");
let answer = dogImages[2];
let dogBreed = document.getElementById("dogBreed");
dogBreed.textContent = answer;

for (let i = 0; i < dogImages.length; i++) {
  // Add initial images
  dogs[i].style.backgroundImage = dogImages[i];

  dogs[i].addEventListener("click", function() {
    // alert("clicked an image");
    let clickedImage = this.style.backgroundImage;
    console.log(clickedImage + " " + answer);
    (clickedImage === answer) ? alert("Correct!") : alert("Wrong!");
  });
}