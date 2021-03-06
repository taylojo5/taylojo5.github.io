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

        var splashSpinner = document.createElement('div');
        splashSpinner.id = 'splashSpinner';
        splashSpinner.append()

        splashScreen.append(splashText);
        setTimeout(()=>{
            splashScreen.append(splashLoad);
        }, 3000);
        splashScreen.append(splashSpinner);

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
                setTimeout(scrollMessage, 30000);
            }
        }
        setTimeout(scrollMessage, 30000);
    }
    sessionStorage.setItem('first', 'true');
}

var currentSlide = 0;
var slideList = ['./slides1.jpg', './slides3.jpg', './slides4.jpg']
var authorList = ['samsommer', 'Rohit Tandon', 'Ales Krivec'];
var citeLinks = [
    'https://unsplash.com/@samsommer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
 'https://unsplash.com/@rohittandon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 
 'https://unsplash.com/@aleskrivec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'];
var authorLink = document.getElementById('authorCite');
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
    authorLink.href = citeLinks[currentSlide];
    authorLink.textContent = authorList[currentSlide];
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
    authorLink.href = citeLinks[currentSlide];
    authorLink.textContent = authorList[currentSlide];
}

function imagePreload(){
    var slideList = ['./slides1.jpg', './slides3.jpg', './slides4.jpg']
    for(image = 0; image < slideList.length; image++){
        var newImg = document.createElement('img');
        newImg.src = slideList[image];
        newImg.style.position = 'absolute';
        newImg.style.top = 0;
        newImg.style.left = 0;
        newImg.style.width = '100vw';
        newImg.style.zIndex = 10000000;
        newImg.style.opacity = 0;
        slides.push(newImg);
        slideContainer.append(newImg);
    }
    slides[0].style.opacity = 1;
    console.log('loaded images');
}

loadingScreen();
imagePreload();
setTimeout(slideshowRotate, 10000);
