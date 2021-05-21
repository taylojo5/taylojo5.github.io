setTimeout(()=>{
    window.location.replace("./contact-form.html");
}, 5500);

var counter = 5;

function redirectTimer(){
    if(counter==0){
        return;
    }
    else{
        counter--;
        setTimeout(redirectTimer, 950);
    }
}

redirectTimer();