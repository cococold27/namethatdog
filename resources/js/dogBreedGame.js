//alert("CONNEDTED!");
let pictures = [
  "url(img/dog1.jpg)",
];

let squares = document.querySelectorAll(".square");

for (let i = 0; i < pictures.length; i++) {
  squares[i].style.backgroundImage = pictures[i];
}

squares[2].style.backgroundImage = "url(resources/img/dog1square2.jpg)";
//squares[3].style.backgroundColor = "rgb(255, 0, 0)";
//squares[4].style.backgroundImage = "url(img/hero.jpg)";