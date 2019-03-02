function dogBreedGame() {
  const numOfPictures = 6;

  const dogImagesLocation = "resources/img/dogs/";

  const dogImages = [
    'url("' + dogImagesLocation + 'dog1.jpg")',
    'url("' + dogImagesLocation + 'dog2.jpg")',
    'url("' + dogImagesLocation + 'dog3.jpg")',
    'url("' + dogImagesLocation + 'dog4.jpg")',
    'url("' + dogImagesLocation + 'dog5.jpg")',
    'url("' + dogImagesLocation + 'affenpinscher.jpg")',
    'url("' + dogImagesLocation + 'afghan-hound.jpg")',
    'url("' + dogImagesLocation + 'airedale-terrier.jpg")',
    'url("' + dogImagesLocation + 'akita-inu.jpg")',
    'url("' + dogImagesLocation + 'alaskan-malamute.jpg")',
  ];

  console.log(dogImages);



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





  let currentLevel = 1;
  let currentLives = 3;
  let currentScore = 0;
  let bestScore = 0;

  for (let i = 0; i < numOfPictures; i++) {
    let randomNumber = Math.floor(Math.random() * dogImages.length);
    console.log(randomNumber, dogImages.length);

    // Add images
    // dogs[i].style.backgroundImage = dogImages[i];
    dogs[i].style.backgroundImage = dogImages[randomNumber];

    dogs[i].addEventListener("click", function() {
      // alert("clicked an image");
      let clickedImage = this.style.backgroundImage;
      console.log(clickedImage + " " + answer);

      const displayMessage = document.getElementById("message");
      displayMessage.parentElement.style.display = "inline";
      if (clickedImage === answer) {
        messageDisplay.textContent = "Correct";

        currentLevel++;
        document.getElementById("current-level").textContent = currentLevel;

        currentScore += 100;
        document.getElementById("current-score").textContent = currentScore;

        if (bestScore <= currentScore) {
          bestScore = currentScore;
          document.getElementById("best-score").textContent = bestScore;
        }

      } else { 
        messageDisplay.textContent = "Try again";

        currentLives--;
        document.getElementById("current-lives").textContent = currentLives;
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


  const displayCurrentLives = document.getElementById("current-lives");

  displayCurrentLives.textContent = currentLives;

  const displayCurrentScore = document.getElementById("current-score");
  displayCurrentScore.textContent = currentScore;

  const displayBestScore = document.getElementById("best-score");
  displayBestScore.textContent = bestScore;
}

dogBreedGame();