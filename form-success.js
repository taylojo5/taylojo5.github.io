setTimeout(()=>{
    window.location.replace("./contact-form.html");
}, 5500);

var counter = 5;

setTimeout(()=>{
    if(counter==0){
        return;
    }
    else{
        counter--;
        document.getElementById('timout').textContent = counter;
        setTimeout(()=>{
            if(counter==0){
                return;
            }
            else{
                counter--;
                document.getElementById('timout').textContent = counter;
            }
        }, 950);
    }
}, 950);