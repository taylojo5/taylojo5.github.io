var formOpen = document.getElementById('messageButton');
var formClose = document.getElementById('formClose');
var messageForm = document.getElementById('contactFormContainer');
var contentContainer = document.getElementById('contentContainer');
var formInputs = document.getElementsByTagName('input');
var formValues = ['* Name: ', '* Email: ', 'Phone: ', '* Type Message Here: '];

var formIsOpen = false;

function removeValue(){
    event.stopPropagation();
    var input = event.target;
    if(input.id != 'submitButton'){
        input.value = '';
        input.style.color = 'black';
    }
}

function addValue(){
    for(index = 0; index < formInputs.length; index++){
        if(formInputs[index].id != 'submitButton'){
            if(formInputs[index].value == '' && formInputs[index] != event.target){
                formInputs[index].value = formValues[index];
                formInputs[index].style.color = 'rgba(65, 65, 65, 0.4)';
            }
        }
    }
}

//add event listener to open the form when the button is clicked if applicable
formOpen.addEventListener('click', ()=>{
    if(!formIsOpen){
        messageForm.style.opacity = 1;
        messageForm.style.zIndex = 1000;
        contentContainer.style.zIndex = 1;
        formIsOpen = true;
    }
    event.stopPropagation();
});

//add event listener to the form close button to close the form if applicable
formClose.addEventListener('click', ()=>{
    if(formIsOpen){
        messageForm.style.zIndex = -1;
        messageForm.style.opacity = 0;
        formIsOpen = false;
        addValue();
    }
});

//add listener to nullify the form close event listeners if the form itself is clicked on
messageForm.addEventListener('click', ()=>{
    event.stopPropagation();
    addValue();
});

//add click listenter to close the form if the page is clicked elsewhere
contentContainer.addEventListener('click', ()=>{
    if(formIsOpen){
        messageForm.style.zIndex = -1;
        messageForm.style.opacity = 0;
        formIsOpen = false;
        addValue();
    }
});
