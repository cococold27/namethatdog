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
    'url("' + DOG_IMAGES_LOCATION + 'black-mouth-cur.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'black-russian-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bloodhound.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'blue-lacy.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bluetick-coonhound.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'boerboel.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'border-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'borzoi.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'boston-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bouvier-des-flandres.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'boxer.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'boykin-spaniel.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'bracco-italiano.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'briard.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'brittany.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'brussels-griffon.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
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

function generatePictures(NUM_OF_PICTURES) {
  const dogs = document.querySelectorAll(".picture-container");
  const dogImages = allDogBreeds();
  const randomDog = dogImages[Math.floor(Math.random() * dogImages.length)];
  document.getElementById("dog-breed").textContent = getDogName(randomDog);

  let uniqueDogImages = [];

  uniqueDogImages[0] = randomDog;
  dogs[0].style.visibility = "visible";
  dogs[0].style.opacity = "1";
  dogs[0].style.transition = "visibility 1s, opacity 1s";
  dogs[0].style.backgroundImage = randomDog;

  for (let i = 1; i < NUM_OF_PICTURES; i++) {
    const RANDOM_NUMBER = Math.floor(Math.random() * dogImages.length);
    
    // Add unique images
    let isUnique = true;

    for (let j = 0; j < uniqueDogImages.length; j++) {
      if (dogImages[RANDOM_NUMBER] === uniqueDogImages[j]) {
        isUnique = false;
      }
    }

    if (isUnique) {
      uniqueDogImages.push(dogImages[RANDOM_NUMBER]);

      dogs[i].style.visibility = "visible";
      dogs[i].style.opacity = "1";
      dogs[i].style.transition = "visibility 1s, opacity 1s";
      dogs[i].style.backgroundImage = dogImages[RANDOM_NUMBER];
    } else {
      i--;
    }
  }

  const RANDOM_DOG_INDEX = Math.floor(Math.random() * NUM_OF_PICTURES);
  let temp = dogs[RANDOM_DOG_INDEX].style.backgroundImage;
  dogs[RANDOM_DOG_INDEX].style.backgroundImage = randomDog;
  dogs[0].style.backgroundImage = temp;

  return randomDog;
}

function dogBreedGame() {
  const NUM_OF_PICTURES = 6;

  const dogs = document.querySelectorAll(".picture-container");
  const messageDisplay = document.querySelector("#message");

  let randomDog = generatePictures(NUM_OF_PICTURES);

  let currentLevel = 1;
  let currentLives = 3;
  let currentScore = 0;
  let bestScore = 0;
 
  document.getElementById("current-lives").textContent = currentLives;
  document.getElementById("current-score").textContent = currentScore;
  document.getElementById("best-score").textContent = bestScore;


  for (let i = 0; i < NUM_OF_PICTURES; i++) {
    // console.log(uniqueDogImages);

    let firstClick = true;

    dogs[i].addEventListener("click", function() {
      // alert("clicked an image");
      let clickedImage = this.style.backgroundImage;
      console.log(clickedImage + " " + randomDog);
      console.log(firstClick);

      const displayMessage = document.getElementById("message");
      displayMessage.parentElement.style.display = "inline";
      if (clickedImage === randomDog && firstClick) {
        firstClick = false;

        messageDisplay.textContent = "Correct!";
        
        currentLevel++;
        document.getElementById("current-level").textContent = currentLevel;

        currentScore += 100;
        document.getElementById("current-score").textContent = currentScore;

        if (bestScore <= currentScore) {
          bestScore = currentScore;
          document.getElementById("best-score").textContent = bestScore;
        }

        for (let j = 0; j < dogs.length; j++) {
          dogs[j].style.visibility = "hidden";
          dogs[j].style.opacity = "0";
          dogs[j].style.transition = "visibility 0.7s, opacity 0.7s";
          dogs[j].style.transitionDelay = "0.2s";
        }

        setTimeout(function() { 
          firstClick = true;
          randomDog = generatePictures(NUM_OF_PICTURES, randomDog);
        }, 1000);
      } else if (firstClick) {
        firstClick = false;

        currentLives--;

        messageDisplay.textContent = "Try again";
        this.style.visibility = "hidden";
        this.style.opacity = "0";
        this.style.transition = "visibility 0.7s, opacity 0.7s";
        this.style.transitionDelay = "0.2s";

        setTimeout(function() {
          firstClick = true;
        }, 1000);

        if (currentLives <= 0) {
          for (let j = 0; j < dogs.length; j++) {
            dogs[j].style.visibility = "hidden";
            dogs[j].style.opacity = "0";
            dogs[j].style.transition = "visibility 0.7s, opacity 0.7s";
            dogs[j].style.transitionDelay = "0.2s";
          }
          
          setTimeout(function() {
            firstClick = true;
            randomDog = generatePictures(NUM_OF_PICTURES, randomDog);
          }, 1000);

          currentLevel = 1;
          currentScore = 0;
          currentLives = 3;

          document.getElementById("current-level").textContent = currentLevel;
          document.getElementById("current-score").textContent = currentScore;
          displayMessage.parentElement.style.display = "none";
        }
        document.getElementById("current-lives").textContent = currentLives;
      } 
    });
  }
}

dogBreedGame();