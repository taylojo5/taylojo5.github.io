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