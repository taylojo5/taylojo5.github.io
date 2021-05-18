var formOpen = document.getElementById('messageButton');
var formClose = document.getElementById('formClose');
var messageForm = document.getElementById('contactFormContainer');
var contentContainer = document.getElementById('contentContainer');

var formIsOpen = false;

formOpen.addEventListener('click', ()=>{
    if(!formIsOpen){
        messageForm.style.opacity = 1;
        messageForm.style.zIndex = 1000;
        contentContainer.style.zIndex = 1;
        formIsOpen = true;
    }
    event.stopPropagation();
});

formClose.addEventListener('click', ()=>{
    if(formIsOpen){
        messageForm.style.zIndex = -1;
        messageForm.style.opacity = 0;
        formIsOpen = false;
    }
});

messageForm.addEventListener('click', ()=>{
    event.stopPropagation();
});

contentContainer.addEventListener('click', ()=>{
    if(formIsOpen){
        messageForm.style.zIndex = -1;
        messageForm.style.opacity = 0;
        formIsOpen = false;
    }
});