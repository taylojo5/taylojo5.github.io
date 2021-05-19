var skillArray = document.getElementsByClassName('skillLi');  
var contentArray = document.getElementsByClassName('skillContent');

//add click event listeners to each skill button
for(index = 0; index < skillArray.length; index++){
    skillArray[index].addEventListener('click', skillToggle);
    skillArray[index].name = 'closed';
}

document.body.addEventListener('click', skillClose);

function skillToggle(){
    event.stopPropagation();
    var skill = event.target;
    var content = skill.childNodes[1];
    if(skill.name == 'closed'){
        //if any other skills are open, closed them
        for(index = 0; index < skillArray.length; index++){
            if(skillArray[index].name == 'open'){
                skillArray[index].name = 'closed';
                skillArray[index].style.height = '10vh';
                skillArray[index].style.paddingTop = '5vh';
            }
        }
        //open
        for(index = 0; index < skillArray.length; index++){
            if(skillArray[index].name == 'closed'){
                skillArray[index].style.paddingTop = '2vh';
            }
        }
        skill.name = 'open';
        skill.style.height = '60vh';
        skill.style.paddingTop = '1vh';
        content.style.display = 'block';
        content.style.opacity = 1;
    }
    else{
        //close
        skill.name = 'closed';
        skill.style.height = '10vh';
        skill.style.paddingTop = '5vh';
        for(index = 0; index < skillArray.length; index++){
            if(skillArray[index].name == 'closed'){
                skillArray[index].style.paddingTop = '5vh';
            }
        }
    }
}

function skillClose(){
    for(index = 0; index < skillArray.length; index++){
        if(skillArray[index].name == 'open'){
            skillArray[index].name = 'closed';
            skillArray[index].style.height = '10vh';
            skillArray[index].style.paddingTop = '5vh';
        }
    }
    for(index = 0; index < skillArray.length; index++){
        if(skillArray[index].name == 'closed'){
            skillArray[index].style.paddingTop = '5vh';
        }
    }
}