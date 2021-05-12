var updateButton = document.getElementById('updateToggle');
var updateConsole = document.getElementById('updateConsole');
var taraSection = document.getElementById('taraSection');
var quadSection = document.getElementById('quadSection');
var projectBackground = document.getElementById('projectBackground');
var updateToggled = true;

var taraButton = document.getElementById('taraButton');
var quadButton = document.getElementById('quadButton');
var openProject = null;

updateButton.addEventListener('click', toggleUpdates);
taraButton.addEventListener('click', projectDisplay);
quadButton.addEventListener('click', projectDisplay);

function toggleUpdates(){
    updateConsole.style.transition = '1s';
    taraSection.style.transition = '1s';
    quadSection.style.transition = '1s';

    if(updateToggled){
        //minimize
        updateConsole.style.height = 0;
        updateButton.textContent = 'Updates'
        taraSection.style.width = '100vw';
        quadSection.style.width = '100vw';
        projectBackground.style.width = '100vw';
        updateToggled = false;
    }
    else{
        //maximize
        updateConsole.style.height = '70vh';
        updateButton.innerText = '\u2716';
        taraSection.style.width = '70vw';
        quadSection.style.width = '70vw';
        projectBackground.style.width = '70vw';
        updateToggled = true;
    }
}

var lastButton;

function projectDisplay(){
    if(lastButton != null){
        lastButton.textContent = lastButton.value;
    }
    if(openProject != null){
        openProject.style.opacity = '0';
        openProject.style.zIndex = '-1';
        projectBackground.style.opacity = '1';

    }
    var projectSelected = document.getElementById(event.target.name);
    if(openProject == projectSelected){
        openProject.style.opacity = '0';
        openProject.style.zIndex = '-1';
        projectBackground.style.opacity = '1';
        openProject = null;
    }
    else{
        projectSelected.style.opacity = '1';
        projectSelected.style.zIndex = '1';
        projectBackground.style.opacity = '0';
        event.target.textContent = '\u2716';
        openProject = projectSelected;
    }
    lastButton = event.target;
}