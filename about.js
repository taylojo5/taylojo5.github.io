var skillArray = document.getElementsByClassName('skillLi');  
var contentArray = document.getElementsByClassName('skillContent');
var skillList = document.getElementById('skillList');

//add click event listeners to each skill button
for(index = 0; index < skillArray.length; index++){
    skillArray[index].addEventListener('click', skillToggle);
    skillArray[index].name = 'closed';
}

document.body.addEventListener('click', skillClose);

function skillToggle(){
    event.stopPropagation();
    if (event.target == skillArray[0] ||
        event.target == skillArray[1] || 
        event.target == skillArray[2] || 
        event.target == skillArray[3])
    {
        var skill = event.target;
        var content = skill.childNodes[1];
        console.log(event.target);
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
            skill.name = 'open';
            skill.style.height = '30vh';
            skill.style.paddingTop = '1vh';
            skill.style.zIndex = 1;
            content.style.display = 'block';
            content.style.opacity = 1;
            content.style.zIndex = -1;
            for(index = 0; index < skillArray.length; index++){
                if(skillArray[index] != event.target){
                    var contentSub = skillArray[index].childNodes[1];
                contentSub.style.display = 'none';
                contentSub.style.opacity = 0;
                }
            }
        }
        else{
            //close
            skill.name = 'closed';
            skill.style.height = '10vh';
            skill.style.paddingTop = '5vh';
            content.style.display = 'none';
            content.style.opacity = 0;
            for(index = 0; index < skillArray.length; index++){
                var contentSub = skillArray[index].childNodes[1];
                contentSub.style.display = 'none';
                contentSub.style.opacity = 0;
            }
        }
    }
}

function skillClose(){
    event.stopPropagation();
    for(index = 0; index < skillArray.length; index++){
        var content = skillArray[index].childNodes[1];
        if(skillArray[index].name == 'open'){
            skillArray[index].name = 'closed';
            skillArray[index].style.height = '10vh';
            skillArray[index].style.paddingTop = '5vh';
            content.style.display = 'none';
            content.style.opacity = 0;
        }
    }
    for(index = 0; index < skillArray.length; index++){
        var content2 = skillArray[index].childNodes[1];
        if(skillArray[index].name == 'closed'){
            skillArray[index].style.paddingTop = '5vh';
            content2.style.display = 'none';
            content2.style.opacity = 0;
        }
    }
}