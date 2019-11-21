function darkModeToggle() {
    // toggle dark stuff
    document.getElementById('notheader').classList.toggle('darkHeader');
    document.getElementById('notnav').classList.toggle('darkNav');
    //document.getElementsByClassName('notnava').classList.toggle('darkNavA'); //Cannot read property 'toggle', thus just made a bunch of ids
    document.getElementById('navHome').classList.toggle('darkNavA');
    document.getElementById('notMain').classList.toggle('darkBody');
    document.getElementById('navCN').classList.toggle('darkNavA');
    document.getElementById('navWN').classList.toggle('darkNavA');
    document.getElementById('navSN').classList.toggle('darkNavA');
    document.getElementById('navWeather').classList.toggle('darkNavA');
    
    document.getElementById('notmain').classList.toggle('darkMain');
    document.getElementById('notfooter').classList.toggle('darkFooter');
    document.getElementById('notCopy').classList.toggle('darkText');
}