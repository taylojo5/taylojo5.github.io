var formOpen = document.getElementById('messageButton');
var formClose = document.getElementById('formClose');
var messageForm = document.getElementById('contactFormContainer');
var contactForm = document.getElementById('contactForm');
var formInputs = document.getElementsByClassName('formInputs');
var formValues = ['* Name: ', '* Email: ', 'Phone: ', 'Type Message Here...'];
var submitButton = document.getElementById('submitButton');
var loadSpinner = document.getElementById('loadSpinner');

function removeValue(){
    event.stopPropagation();
    var input = event.target;
    if(input.id != 'submitButton'){
        if(input.id == 'messageBox'){
            input.textContent = '';
            console.log('clear');
        }
        else{
            input.value = '';
        }
        input.style.color = 'black';
        input.style.textAlign = 'left';  
    }
}

function addValue(){
    for(index = 0; index < formInputs.length; index++){
        if(formInputs[index].id != 'submitButton'){
            if(formInputs[index].value == '' && formInputs[index] != event.target){
                if(formInputs[index].id == 'messageBox'){
                    formInputs[index].textContent = formValues[index];
                    
                }
                else{
                    if(formInputs[index].value == '' && formInputs[index] != event.target){
                    formInputs[index].value = formValues[index];
                    }
                }
                formInputs[index].style.color = 'rgba(65, 65, 65, 0.4)';
                formInputs[index].style.textAlign = 'center';
            }
        }
    }
}

for(index = 0; index < formInputs.length; index++){
    formInputs[index].addEventListener('click', ()=>{
        removeValue();
    });
}

contactForm.addEventListener('click', ()=>{
    addValue();
});

submitButton.addEventListener('click',()=>{
    loadSpinner.style.transition = '0.5s';
    loadSpinner.style.zIndex = 1;
    loadSpinner.style.opacity = 1;
});