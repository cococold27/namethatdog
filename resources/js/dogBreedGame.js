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
    'url("' + DOG_IMAGES_LOCATION + 'canaan.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'cardigan-welsh-corgi.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'cavalier-king-charles-spaniel.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'chihuahua.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'chinese-crested.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'chow-chow.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'clumber-spaniel.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'collie.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'curly_coated-retriever.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'dachshund.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'dalmatian.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'doberman-pinscher.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'dogo-argentino.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'dogue-de-bordeaux.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'dutch-shepherd.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'english-setter.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'english-springer-spaniel.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'entlebucher-mountain-dog.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'finnish-lapphund.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'finnish-spitz.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'flat_coated-retriever.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'fox-terrier.jpg")',
    'url("' + DOG_IMAGES_LOCATION + 'french-bulldog.jpg")',
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
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    // 'url("' + DOG_IMAGES_LOCATION + '.jpg")',
    
    
    
    
    
    
    'url("' + DOG_IMAGES_LOCATION + 'redbone-coonhound.jpg")',
    
    
    'url("' + DOG_IMAGES_LOCATION + 'shar-pei.jpg")',
    
    
    'url("' + DOG_IMAGES_LOCATION + 'xoloitzcuintli.jpg")',
  ];

  return dogImages;
}

function getDogName(randomDog) {
  let dogName = "";

  const START_INDEX = "/dogs/";
  const END_INDEX = ".";

  const start = randomDog.indexOf(START_INDEX) + START_INDEX.length;
  const end = randomDog.indexOf(END_INDEX);

  const dogDisplay = randomDog.slice(start, end);
  const dogDisplayArr = dogDisplay.split("-");

  for (let i = 0; i < dogDisplayArr.length; i++) {
    dogName += dogDisplayArr[i].charAt(0).toUpperCase() + dogDisplayArr[i].slice(1) + " ";
  }

  return dogName.replace("_", "-");
}

function generateDogs(NUM_OF_PICTURES) {
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

  // Randomize the answer
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

  let randomDog = generateDogs(NUM_OF_PICTURES);

  let currentLevel = 1;
  let currentLives = 5;
  let currentScore = 0;
  let bestScore = 0;
 
  document.getElementById("current-lives").textContent = currentLives;
  document.getElementById("current-score").textContent = currentScore;
  document.getElementById("best-score").textContent = bestScore;

  for (let i = 0; i < NUM_OF_PICTURES; i++) {
    // console.log(uniqueDogImages);
    let firstClick = true;

    dogs[i].addEventListener("click", function(e) {
      // alert("clicked an image");
      // console.log(e);
      // console.log(e.type);


      let clickedImage = this.style.backgroundImage;
      console.log(clickedImage + " " + randomDog);
      console.log(getDogName(clickedImage));
      console.log(getDogName(randomDog));

      if (getDogName(clickedImage) === getDogName(randomDog.slice(0, randomDog.length-1))) {
        console.log("here");
      }
      // console.log(firstClick);

      // if ((clickedImage === randomDog) && firstClick) {
        if (true) {
        firstClick = false;

        document.getElementById("jumbotron-message").style.display = "block";
        document.getElementById("jumbotron-message").style.backgroundColor = "#28a745";
        document.getElementById("jumbotron-message").style.borderColor = "#28a745";
        document.getElementById("message").style.color = "#eee";
        messageDisplay.innerHTML = "<h4>Correct!<h4>";
        
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
          randomDog = generateDogs(NUM_OF_PICTURES, randomDog);
        }, 1000);

      } else if (firstClick) {
        firstClick = false;

        currentLives--;

        document.getElementById("jumbotron-message").style.display = "block";
        document.getElementById("jumbotron-message").style.backgroundColor = "#ffc107";
        document.getElementById("jumbotron-message").style.borderColor = "#ffc107";
        document.getElementById("message").style.color = "#141414";
        messageDisplay.innerHTML = "<h4>Try again<h4>";

        this.style.visibility = "hidden";
        this.style.opacity = "0";
        this.style.transition = "visibility 0.7s, opacity 0.7s";
        this.style.transitionDelay = "0.2s";

        setTimeout(function() {
          firstClick = true;
        }, 1500);

        if (currentLives <= 0) {
          $("#modalCenter").modal('show');

          for (let j = 0; j < dogs.length; j++) {
            dogs[j].style.visibility = "hidden";
            dogs[j].style.opacity = "0";
            dogs[j].style.transition = "visibility 0.7s, opacity 0.7s";
            dogs[j].style.transitionDelay = "0.2s";
          }
          
          setTimeout(function() {
            firstClick = true;
            randomDog = generateDogs(NUM_OF_PICTURES, randomDog);
          }, 1000);

          currentLevel = 1;
          currentScore = 0;
          currentLives = 5;

          document.getElementById("current-level").textContent = currentLevel;
          document.getElementById("current-score").textContent = currentScore;
          document.getElementById("jumbotron-message").style.display = "none";
        }
        document.getElementById("current-lives").textContent = currentLives;
      } 
    });
  }
}

dogBreedGame();