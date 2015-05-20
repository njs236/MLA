mla.view = (function () {
   var initModule, View, aView;
   
   View = function (elements) {
        this.elements = elements; 
        console.log(this.elements);
   } 
   
   View.prototype.setController = function (controller) {
       this.controller = controller;
   }
   
   View.prototype.hideAllPages = function () {
    var i = 0;
    var screens = document.getElementsByClassName('screen');
        for (i; i<screens.length; i++) {
            screens[i].hidden = true;
        }
    }

View.prototype.viewLevelSelectScreen = function (view) {
    aView.displayScreen(aView.elements.levelScreen);
    aView.controller.displayLevelSelectScreen
}

View.prototype.viewResultsScreen = function (view) {
    aView.displayScreen(aView.elements.resultsScreen);
    
}

View.prototype.quitGame = function () {
    location.href = "#quitModal";
}

View.prototype.displayScreen = function(screen) {
    this.hideAllPages();
    screen.hidden = false;
}

View.prototype.viewScreenListeners = function () {
    var view = this;
    /* Main Screen */
    var playGame = document.getElementById('mainPlayGame');
    var viewResults = document.getElementById('mainViewResults');
    var quit = document.getElementById('mainQuit');
    playGame.addEventListener("click", this.viewLevelSelectScreen);
    viewResults.addEventListener("click", this.viewResultsScreen);
    quit.addEventListener("click", this.quitGame);
    
    /* Results Screen */
    
    /* Level Screen */
    
    /* Game Screen */
    
}

    initModule = function (elements) {
        aView = new View(elements);
        return aView;
        
    }
    return {initModule: initModule}
}())

