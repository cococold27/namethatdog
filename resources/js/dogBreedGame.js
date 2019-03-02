function allDogBreeds() {
  const DOG_IMAGES_LOCATION = "resources/img/dogs/";

  const dogImages = [
    'url("' + DOG_IMAGES_LOCATION + 'affenpinscher.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'afghan-hound.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'airedale-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'akita-inu.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'alaskan-malamute.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'american-bulldog.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'american-english-coonhound.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'american-eskimo.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'american-foxhound.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'american-pit-bull-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'appenzeller-sennenhund.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'australian-cattle-dog.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'australian-kelpie.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'australian-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'azawakh.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'barbet.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'basenji.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'beagle.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bearded-collie.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bedlington-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'berger-picard.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bichon-frise.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'black-and-tan-coonhound.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',






    'url("' + DOG_IMAGES_LOCATION + 'redbone-coonhound.jpg")',
  ];

  return dogImages;
}

function getDogName(randomDog) {
  let dogName = "";

  const startIndex = "/dogs/";
  const endIndex = ".";

  const start = randomDog.indexOf(startIndex) + startIndex.length;
  const end = randomDog.indexOf(endIndex);

  const dogDisplay = randomDog.slice(start, end);
  const dogDisplayArr = dogDisplay.split("-");

  for (let i = 0; i < dogDisplayArr.length; i++) {
    dogName += dogDisplayArr[i].charAt(0).toUpperCase() + dogDisplayArr[i].slice(1) + " ";
  }

  return dogName;
}

function generatePictures() {
  
}

function dogBreedGame() {
  const NUM_OF_PICTURES = 6;

  const dogImages = allDogBreeds();
  const randomDog = dogImages[Math.floor(Math.random() * dogImages.length)];
  const dogName = getDogName(randomDog);

  document.getElementById("dog-breed").textContent = dogName;

  const dogs = document.querySelectorAll(".picture-container");
  const messageDisplay = document.querySelector("#message");


  let currentLevel = 1;
  let currentLives = 3;
  let currentScore = 0;
  let bestScore = 0;
 



  let uniqueDogImages = [];

  uniqueDogImages[0] = randomDog;
  dogs[0].style.backgroundImage = randomDog;

  for (let i = 1; i < NUM_OF_PICTURES; i++) {
    const RANDOM_NUMBER = Math.floor(Math.random() * dogImages.length);
    // console.log(RANDOM_NUMBER, dogImages.length);

    // Add images
    // dogs[i].style.backgroundImage = dogImages[i];

    let isUnique = true;

    for (let j = 0; j < uniqueDogImages.length; j++) {
      // console.log(dogImages[RANDOM_NUMBER], uniqueDogImages[j]);
      if (dogImages[RANDOM_NUMBER] === uniqueDogImages[j]) {
        isUnique = false;
      }
    }

    if (isUnique) {
      uniqueDogImages.push(dogImages[RANDOM_NUMBER]);
      dogs[i].style.backgroundImage = dogImages[RANDOM_NUMBER];
    } else {
      i--;
    }
  }

  const RANDOM_DOG_INDEX = Math.floor(Math.random() * NUM_OF_PICTURES);
  let temp = dogs[RANDOM_DOG_INDEX].style.backgroundImage;
  dogs[RANDOM_DOG_INDEX].style.backgroundImage = randomDog;
  dogs[0].style.backgroundImage = temp;


  for (let i = 0; i < NUM_OF_PICTURES; i++) {
    // console.log(uniqueDogImages);

    dogs[i].addEventListener("click", function() {
      // alert("clicked an image");
      let clickedImage = this.style.backgroundImage;
      console.log(clickedImage + " " + randomDog);

      const displayMessage = document.getElementById("message");
      displayMessage.parentElement.style.display = "inline";
      if (clickedImage === randomDog) {
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