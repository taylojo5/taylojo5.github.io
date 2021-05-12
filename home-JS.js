var first = sessionStorage.getItem('first');

function loadingScreen(){
    if(first != 'true'){
        //create splash screen
        var splashScreen = document.createElement('div');
        splashScreen.id = 'splashScreen';

        var splashText = document.createElement('p');
        splashText.textContent = 'Welcome';
        splashText.id = 'splashText';

        var splashLoad = document.createElement('p');
        splashLoad.id = 'splashLoad';
        splashLoad.textContent = 'Give me a moment to get everything set up...';

        var splashSpinner = document.createElement('div');
        splashSpinner.id = 'splashSpinner';

        splashScreen.append(splashText);
        splashScreen.append(splashLoad);
        splashScreen.append(splashSpinner);

        document.body.append(splashScreen);
    }
    sessionStorage.setItem('first', 'true');
}

var currentSlide = 0;
var slideList = ['./slides1.jpg', './slides3.jpg', './slides4.jpg']
var slideContainer = document.getElementById('pictureCarousel');

var rightButton = document.getElementById('rightArrow');
rightButton.addEventListener('click', slideshowNext);

var leftButton = document.getElementById('leftArrow');
leftButton.addEventListener('click', slideshowPrev);

function slideshowRotate(){
    console.log('Rotating');
    slideshowNext();
    setTimeout(slideshowRotate, 10000);
}

function slideshowNext(){
    currentSlide ++;
    if(currentSlide == slideList.length){
        currentSlide = 0;
    }
    slideContainer.style.transition = '3s';
    slideContainer.style.backgroundImage = 'url(' + slideList[currentSlide] +')';
}

function slideshowPrev(){
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = slideList.length - 1;
    }
    slideContainer.style.transition = '3s';
    slideContainer.style.backgroundImage = 'url(' + slideList[currentSlide] +')';
}
setTimeout(slideshowRotate, 10000);

loadingScreen();

