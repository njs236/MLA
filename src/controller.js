mla.controller = (function (){
    var initModule, Controller, selectedWord, newVocabulary, splicedVocabulary, newTable;
    splicedVocabulary = [];
    
    Controller = function (view,model) {
        this.view = view;
        this.model = model;
        this.returnModel = function () {
            return this.model;
        }
    }
    
    
    /**********************************
    
    Select Screen
    
    **********************************/
    
    Controller.prototype.viewLevelSelectScreen = function () {
        this.view.viewLevelSelectScreen(function () {
            this.model.getMyVocabsForDisplay()
        })
 }
    
    Controller.prototype.selectGame = function (id) {
        /* v1.1 Prepares the view for the game and gives information to the view.
        */
        this.view.viewGameScreen(function () {
        var vocab = this.model.findVocab(id), word;
        this.loadVocabulary(vocab);
        console.log(newVocabulary);
        word = this.randomSelectionOfWord();
        })
    }
    
    /******************************
    
    Game Screen
    
    *********************************/
    
    Controller.prototype.loadVocabulary = function (vocabulary) {
        newVocabulary = vocabulary.allMyWords.slice();
        this.loadSplicedVocabulary();
        return {newVocabulary, vocabulary};
        
    }
    
    Controller.prototype.loadSplicedVocabulary = function () {
        splicedVocabulary = newVocabulary.slice();
    }
    
    Controller.prototype.randomSelectionOfWord = function () {
        var rand = Math.floor(Math.random())*splicedVocabulary.length;
        selectedWord = splicedVocabulary[rand];

        splicedVocabulary.splice(rand, 1);
        return selectedWord;
        
    }
    
    Controller.prototype.loadTable = function () {
        
    }
    
    initModule = function () {
        var view = mla.view.initModule({levelScreen: document.getElementById('selectScreen'),
        resultsScreen: document.getElementById('resultsScreen'),
        homeScreen: document.getElementById('mainScreen'),
        gameScreen: document.getElementById('gameScreen')});
        var model = mla.model.initModule();
        var controller = new Controller(view,model)
        view.setController(controller);
        view.viewScreenListeners();
        return controller;  
    }
    
    return {initModule:initModule};

}())