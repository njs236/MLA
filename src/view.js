mla.view = (function () {
   var initModule, View, aView;
   
   View = function (elements) {
        this.elements = elements; 
   } 
   
   View.prototype.setController = function (controller) {
       this.controller = controller;
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



View.prototype.viewResultsScreen = function () {
    aView.displayScreen(aView.elements.resultsScreen);
    
}

View.prototype.viewGameScreen = function () {
    aView.displayScreen(aView.elements.gameScreen);
}

View.prototype.viewHomeScreen = function () {
    aView.displayScreen(aView.elements.homeScreen);
}

View.prototype.quitGame = function () {
    location.href = "#quitModal";
}

View.prototype.no = function () {
    location.href = "#";
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
    var no = document.getElementById('no');
    no.addEventListener("click", this.no);
    /* Results Screen */
    
    /* Level Screen */
    
    /* Game Screen */
    
}

/************************

Select Screen

*************************/

View.prototype.writeSelectTable = function (items) {
    var i, div;
    var selectScreenDiv = document.getElementById('selectScreenDiv');
    /* 
    For clearing the data in the view;
    */
    while ( selectScreenDiv.hasChildNodes() ){
			selectScreenDiv.removeChild(selectScreenDiv.firstChild);
		};
    for (i = 0; i < items.length; i++) {
        var surroundingDiv = document.createElement('DIV');
        surroundingDiv.className = 'selectContentsDiv';
        selectScreenDiv.appendChild(surroundingDiv);
        div = document.createElement('DIV');
        div.textContent = items[i];
        div.setAttribute('id', i);
        div.className = 'selectOptionsButton';
        
        var k = i.valueOf();
        
        div.addEventListener("click",aView.controller.selectGame);
         div.addEventListener("click", aView.viewGameScreen);
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




/*************************

Game Screen

*************************/

View.prototype.presentBackButton = function () {
    /* The Back Button */
    var div;
    var gameScreenLeft = document.getElementById('gameScreenLeft');
    var surroundingDiv = document.createElement('DIV');
    surroundingDiv.className = 'gameContentsDiv';
    gameScreenLeft.appendChild(surroundingDiv);
    div = document.createElement('DIV');
    div.textContent = 'Back';
    console.log(aView.viewGameScreen);
    div.addEventListener("click", aView.displayLevelSelectScreen);
    div.className = 'gameOptionsButton';
    gameScreenLeft.lastChild.appendChild(div);
}

View.prototype.presentResults = function () {
    /* The Back Button */
    var div;
    var resultsScreenCaption = document.getElementById('caption');
    var surroundingDiv = document.createElement('DIV');
    surroundingDiv.className = 'ResultsCaptionsDiv';
    resultsScreenCaption.appendChild(surroundingDiv);
    div = document.createElement('DIV');
    div.textContent = 'Back';
    div.addEventListener("click", aView.viewHomeScreen);
    div.className = 'resultsOptionsButton';
    resultsScreenCaption.lastChild.appendChild(div);
}

View.prototype.displayTextQuestion = function (array) {

    var i;
    var question = document.getElementById('gameScreenQuestion');
    var gameOptions = document.getElementsByClassName('gameOption');
    console.log(gameOptions.length);
    // removing images from the options;    
    for (i =0; i < gameOptions.length; i++) {
        while ( gameOptions[i].hasChildNodes() ){
			gameOptions[i].removeChild(gameOptions[i].firstChild);
		};
    }
    
    /*Array:
    [0] = Word for display;
    [1-4] = Words chosen at Random;
    */
    question.textContent = ' What is the Maori word for ' + array[0] + "?";
    for (i = 1; i <= gameOptions.length; i++) {
        gameOptions[i-1].textContent = array[i];
        gameOptions[i-1].addEventListener("click", aView.controller.selectOption);
    };
};

View.prototype.displayImageQuestion = function (array) {
    var question = document.getElementById('gameScreenQuestion');
    
    var gameOptions = document.getElementsByClassName('gameOption');
    
    var image;
    var audioSounds;
    var i;
    /* 
    For clearing the data in the view;
    */
    while ( question.hasChildNodes() ){
			question.removeChild(question.firstChild);
		};
    // removing images from the options;    
    for (i =0; i < gameOptions.length; i++) {
        while ( gameOptions[i].hasChildNodes() ){
			gameOptions[i].removeChild(gameOptions[i].firstChild);
		};
    }
        
    /*Array:
    [0] = Maori Word for display;
    [1 -4] = Images chosen at Random;
    */

    question.innerHTML = 'What image corresponds to the word ' + array[0] + "?";
    
    for (i = 1; i <= gameOptions.length; i++) {
        image = document.createElement('IMG');
    image.src = 'images/' + array[i];
        gameOptions[i-1].appendChild(image);
        gameOptions[i-1].addEventListener("click", aView.controller.selectOption);
    };
    var audio = document.createElement("AUDIO");
    audio.src = "audio/" + aView.controller.getSelectedWord().getSound();
    audio.play();
}
    initModule = function (elements) {
        aView = new View(elements);
        return aView;
        
    }
    return {initModule: initModule}
}())

