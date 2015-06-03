mla.view = (function () {
   var initModule, View, aView;
   
   View = function (elements) {
        this.elements = elements; 
   } 
   
   View.prototype.setController = function (controller) {
       this.controller = controller;
       console.log(this.controller);
   }
   /*************************************
   
   screenSelection
   
   ****************************************/
   
   View.prototype.hideAllPages = function () {
    var i = 0;
    var screens = document.getElementsByClassName('screen');
        for (i; i<screens.length; i++) {
            screens[i].hidden = true;
        }
    }
    
    View.prototype.displayLevelSelectScreen = function () {
        aView.displayScreen(aView.elements.levelScreen);
    }

View.prototype.writeSelectTable = function (items) {
    
    var i = 0;
    var div;
    var selectScreenDiv = document.getElementById('selectScreenDiv');
    console.log(selectScreenDiv);
    /* 
    For clearing the data in the view;
    */
    while ( selectScreenDiv.hasChildNodes() ){
			selectScreenDiv.removeChild(selectScreenDiv.firstChild);
		};
    for (i; i < items.length; i++) {
        var surroundingDiv = document.createElement('DIV');
        surroundingDiv.className = 'selectContentsDiv';
        selectScreenDiv.appendChild(surroundingDiv);
        div = document.createElement('DIV');
        div.textContent = items[i];
        div.className = 'selectOptionsButton';
        div.addEventListener("click",function () {
         aView.controller.selectGame(items[i])  
        });
        selectScreenDiv.lastChild.appendChild(div);
    };
    /* The Back Button */
    var surroundingDiv = document.createElement('DIV');
    surroundingDiv.className = 'selectContentsDiv';
    selectScreenDiv.appendChild(surroundingDiv);
    div = document.createElement('DIV');
    div.textContent = 'Back';
    div.addEventListener("click", this.viewHomeScreen)
    div.className = 'selectOptionsButton';
    selectScreenDiv.lastChild.appendChild(div);
    
}

View.prototype.viewResultsScreen = function () {
    aView.displayScreen(aView.elements.resultsScreen);
    
}

View.prototype.viewGameScreen = function (callback) {
    this.displayScreen(aView.elements.gameScreen);
    callback;
}

View.prototype.viewHomeScreen = function () {
    aView.displayScreen(aView.elements.homeScreen);
}

View.prototype.quitGame = function () {
    location.href = "#quitModal";
}

View.prototype.displayScreen = function(screen) {
    this.hideAllPages();
    screen.hidden = false;
}

View.prototype.viewScreenListeners = function () {
    /* Main Screen */
    var playGame = document.getElementById('mainPlayGame');
    var viewResults = document.getElementById('mainViewResults');
    var quit = document.getElementById('mainQuit');
    playGame.addEventListener("click", this.displayLevelSelectScreen);
    viewResults.addEventListener("click", this.viewResultsScreen);
    quit.addEventListener("click", this.quitGame);
    
    /* Results Screen */
    
    /* Level Screen */
    
    /* Game Screen */
    
}

/************************

Select Screen

*************************/




/*************************

Game Screen

*************************/

View.prototype.displayTextQuestion = function (array) {
    /*Array:
    [0] = Word for display;
    [1] = Words chosen at Random;
    [1][0-3] = Words chosen at random;
    */
    var i = 0;
    var question = document.getElementById('gameScreenWord');
    
    var gameOptions = document.getElementsByClassName('gameOption');
    
    question.textContent = array[0];
    
    for (i; i < gameOptions.length; i++) {
        gameOptions[i].textContent = array[1][i];
    };
}

    initModule = function (elements) {
        aView = new View(elements);
        return aView;
        
    }
    return {initModule: initModule}
}())

