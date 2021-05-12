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
        var currentMessage = 0;
        var loadMessages = ['Give me a moment to get everything set up...', 'Wow, still loading...',
         'Well, this is either you or me...', 'Well &!*#'];
        splashLoad.textContent = loadMessages[0];

        var spinnerDiv = document.createElement('div');
        spinnerDiv.id = 'spinnerDiv';

        var splashSpinner = document.createElement('div');
        splashSpinner.id = 'splashSpinner';
        var percentage = document.createElement('p');
        percentage.id = 'percentage';
        percentage.textContent = '0%';
        spinnerDiv.append(percentage);
        spinnerDiv.append(splashSpinner);

        splashScreen.append(splashText);
        splashScreen.append(splashLoad);
        splashScreen.append(spinnerDiv);

        document.body.append(splashScreen);
        function scrollMessage(){
            if(currentMessage == loadMessages.length - 1){
                splashLoad.style.opacity = 0;
                splashLoad.textContent = 'I guess this is how things are now.'
                splashLoad.style.opacity = 1;
            }
            else{
                currentMessage++;
                splashLoad.style.opacity = 0;
                splashLoad.textContent = loadMessages[currentMessage];
                splashLoad.style.opacity = 1;
                setTimeout(scrollMessage, 10000);
            }
        }
        setTimeout(scrollMessage, 10000);
    }
    sessionStorage.setItem('first', 'true');
}

var currentSlide = 0;
var slideList = ['./slides1.jpg', './slides3.jpg', './slides4.jpg']
var slides = [];
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
    slides[currentSlide].style.transition = '3s';
    slides[currentSlide].style.opacity = 0;
    currentSlide ++;
    if(currentSlide == slideList.length){
        currentSlide = 0;
    }
    slides[currentSlide].style.transition = '3s';
    slides[currentSlide].style.opacity = 1;
}

function slideshowPrev(){
    slides[currentSlide].style.transition = '3s';
    slides[currentSlide].style.opacity = 0;
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = slideList.length - 1;
    }
    slides[currentSlide].style.transition = '3s';
    slides[currentSlide].style.opacity = 1;
}

function imagePreload(){
    var slideList = ['./slides1.jpg', './slides3.jpg', './slides4.jpg']
    var loadPercent = 0;
    for(image = 0; image < slideList.length; image++){
        //update load percentage
        loadPercent = Math.trunc((image / slideList.length) * 100);
        var percent = document.getElementById('percentage');
        percent.textContent = loadPercent + '%';

        var newImg = document.createElement('img');
        newImg.src = slideList[image];
        newImg.style.position = 'absolute';
        newImg.style.top = 0;
        newImg.style.left = 0;
        newImg.style.height = '84vh';
        newImg.style.width = '100vw';
        newImg.style.zIndex = 10000000;
        newImg.style.opacity = 0;
        slides.push(newImg);
        slideContainer.append(newImg);
    }
    percent.textContent = 100 + '%';
    slides[0].style.opacity = 1;
    console.log('loaded images');
}

loadingScreen();
imagePreload();
setTimeout(slideshowRotate, 10000);
