createTransition();
createNav();
createHeader();
createFooter();
setUnderline();

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  });

var mobileNavButton = document.getElementById('mobileNav');
var contentContain = document.getElementById('contentContainer');
var mobileMenuOpen = false;

mobileNavButton.addEventListener('click', ()=>{
    var menu = document.getElementById('navList');
    menu.style.width = 'calc(var(--vw, 1vw) * 100)';
    var spanList = document.getElementsByClassName('navSpan');
    var count = 0;
    setTimeout(nextNav, 75);
    function nextNav(){
        var item = spanList[count];
        item.style.display = 'block';
        item.style.opacity = 1;
        count++;
        if(count < 4) setTimeout(nextNav, 125);
    }
    mobileMenuOpen = true;
});

contentContain.addEventListener('click', ()=>{
    if(mobileMenuOpen == true){
        var menu = document.getElementById('navList');
        var spanList = document.getElementsByClassName('navSpan');
        var count = 3;
        setTimeout(prevNav, 0);
        menu.style.width = 'calc(var(--vw, 1vw) * 0)';
        function prevNav(){
            var item = spanList[count];
            item.style.opacity = 0;
            item.style.display = 'none';
            count--;
            if(count > -1) setTimeout(prevNav, 75);
        }
        mobileMenuOpen = false;
    }
});


function createNav(){
    var pageNav = document.getElementById('nav');
    var navList = document.createElement("ul");
    var mobileNav = document.createElement('div');
    var mobileIcon = document.createElement('p');

    mobileNav.id = 'mobileNav';
    mobileIcon.id = 'mobileNavIcon';
    mobileIcon.textContent = '\u2630';
    mobileNav.append(mobileIcon);
    pageNav.append(mobileNav);

    navList.id = 'navList';

    for(items = 0; items < 4; items++){
        var itemNames = ['Home', 'About', 'Projects', 'Contact'];
        var itemHrefs = ['home.html', 'about.html', 'project.html', 'contact.html'];
        var menuItem = document.createElement('li');
        menuItem.id = 'menuItem'+itemNames[items];
        menuItem.style.display = 'flex';
        menuItem.style.justifyContent = 'center';
        menuItem.style.alignItems = 'center';
        menuItem.style.height = '50%';
        menuItem.style.width = '20%';

        var underlineDiv = document.createElement('div');
        underlineDiv.className = 'navUnder';
        menuItem.append(underlineDiv);
        

        var itemLink = document.createElement('span');
        itemLink.classList.add('navSpan');
        itemLink.href = "./" + itemHrefs[items];
        itemLink.textContent = itemNames[items];
        itemLink.addEventListener('click', navigationPortal);
        
        menuItem.append(itemLink);

        navList.append(menuItem);
    }
    navList.style.position = 'fixed';
    navList.style.display = 'flex';
    navList.style.height = '12vh';
    navList.style.justifyContent = 'space-between';
    navList.style.alignItems = 'center';
    navList.style.top = 0;
    navList.style.right = 0;
    navList.style.zIndex = 1000;
    
    pageNav.append(navList);
}

function createHeader(){
    var pageHead = document.getElementById('header');
    
    var pageLogo = document.createElement('div');
    pageLogo.id = 'pageLogo';

    var logoTitle = document.createElement('a');
    logoTitle.id = 'logoTitle';
    logoTitle.textContent = 'JONATHAN TAYLOR';
    pageLogo.append(logoTitle);

    pageHead.append(pageLogo);
    
}

function createFooter(){
    var pageFoot = document.createElement('footer');
    pageFoot.style.position = 'fixed';
    pageFoot.style.bottom = 0;
    pageFoot.style.left = 0;
    pageFoot.style.width = '100vw';
    pageFoot.style.height = '3vh';
    pageFoot.textContent = '';
    pageFoot.style.textAlign = 'right';
    pageFoot.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

    document.body.append(pageFoot);
}

function createTransition(){
    var transitionWindow = document.createElement('div');
    transitionWindow.id = 'transitionWindow';
    transitionWindow.style.height = '100vh';
    transitionWindow.style.width = '100vw';
    transitionWindow.style.position = 'absolute'
    transitionWindow.style.backgroundColor = 'white';
    transitionWindow.style.top = 0;
    transitionWindow.style.opacity = 1;
    transitionWindow.style.transition = '0.5s';
    transitionWindow.style.zIndex = 100000;

    var loadingText = document.createElement('p');
    loadingText.id = 'loadingText';
    loadingText.textContent = 'Just a sec...';
    loadingText.style.transition = '0.5s';
    loadingText.style.transition = '0.5s';
    loadingText.style.opacity = 1;
    transitionWindow.append(loadingText);


    document.body.append(transitionWindow);
    
    document.body.style.display = 'block';
}

function setUnderline(){
    switch(true){
        case document.URL.includes('home'):
            var page = document.getElementById('menuItemHome');
            page.style.transition = '0.3s';
            page.style.borderColor = 'cornflowerblue';
            break
        case document.URL.includes('about'):
            var page = document.getElementById('menuItemAbout');
            page.style.transition = '0.3s';
            page.style.borderColor = 'cornflowerblue';
            logoTitle.style.borderBottom = 'thin solid cornflowerblue';
            break
        case document.URL.includes('project'):
            var page = document.getElementById('menuItemProjects');
            page.style.transition = '0.3s';
            page.style.borderColor = 'cornflowerblue';
            logoTitle.style.borderBottom = 'thin solid cornflowerblue';
            break
        case document.URL.includes('contact'):
            var page = document.getElementById('menuItemContact');
            page.style.transition = '0.3s';
            page.style.borderColor = 'cornflowerblue';
            logoTitle.style.borderBottom = 'thin solid cornflowerblue';
            break
    }
}

function navigationPortal(){
    event.preventDefault
    console.log(event.target.href);
    var link = event.target.href
    var transitionWindow = document.getElementById('transitionWindow');
    transitionWindow.style.zIndex = 100000;
    transitionWindow.style.opacity = 1;
    setTimeout(() => {window.open(link, '_self');}, 500);
}

window.onload = () =>{
    
    var transitionWindow = document.getElementById('transitionWindow');
    var splashScreen = document.getElementById('splashScreen');
    console.log(transitionWindow);
    transitionWindow.style.transition = '0.5s';
    transitionWindow.style.opacity = 0;
    transitionWindow.style.zIndex = -1;
    if(splashScreen != null){
        setTimeout(()=>{
            console.log('close splash');
            splashScreen.style.transition = '0.5s';
            splashScreen.style.opacity = 0;
            splashScreen.style.zIndex = -1;
        }, 3000);
    }
}