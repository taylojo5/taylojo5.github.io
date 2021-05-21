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
        document.getElementById('timout').textContent = counter;
        setTimeout(redirectTimer, 1000);
    }
}

redirectTimer();