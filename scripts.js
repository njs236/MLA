mla.View = (function () {
   var initModule, View;
   
   View = function (elements) {
        this._elements = elements; 
        viewScreenListeners();
   } 
   
   var hideAllPages = function () {
    var screens = document.getElementsByClassName('screen');
    for (i; i<screens.length; i++) {
        screens[i].hidden = true;
    }
}

var viewLevelSelectScreen = function () {
    this.displayScreen(this._elements.levelScreen);
    controller.displayLevelSelectScreen
}

View.prototype.displayScreen(screen) {
    hideAllPages();
    screen.hidden = false;
}

var viewScreenListeners = function () {
    /* Main Screen */
    var playGame = document.getElementById('mainPlayGame');
    var viewResults = document.getElementById('mainViewResults');
    var quit = document.getElementById('mainQuit');
    playGame.addEventListener("click", viewLevelSelectScreen);
    viewResults.addEventListener("click", viewResultsScreen);
    quit.addEventListener("click", quitGame);
    
    /* Results Screen */
    
    /* Level Screen */
    
    /* Game Screen */
    
}
}())

