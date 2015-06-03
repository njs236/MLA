mla.controller = (function (){
    var initModule, Controller, selectedWord, newVocabulary, splicedVocabulary, newTable;
    splicedVocabulary = [];
    
    Controller = function (view1, model1) {
       var view = view1;
        console.log(view);
        var model = model1;
        console.log(model);
        this.returnModel = function () {
            return model;
        };
        this.display = function () {
            var items = model.getMyVocabsForDisplay();
            view.writeSelectTable(items);
        };
        
        this.selectGame = function (id) {
        /* v1.1 Prepares the view for the game and gives information to the view.
        */
        view.viewGameScreen(function () {
        var vocab = this.model.findVocab(id), word;
        this.loadVocabulary(vocab);
        console.log(newVocabulary);
        word = this.randomSelectionOfWord();
        var array = [word, ]
        view.displayWord();
        })
    }
    };
    
    
    /**********************************
    
    Select Screen
    
    **********************************/

    
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
        var rand = Math.floor(Math.random()*(splicedVocabulary.length-1));
        selectedWord = splicedVocabulary[rand];

        splicedVocabulary.splice(rand, 1);
        return selectedWord;
        
    }
    
    Controller.prototype.loadTable = function (numberOfOptions) {
        // selects word at random from Vocabulary list
        // checks randArray for same numbers
        console.log(this);
       var random = 0,
       array = [],
        randArray = [],
       i = 0, arrayIndexAlreadyUsed = [];
       // Populate array with selectedWord so it doesn't get used twice. 
       randArray.push(newVocabulary.indexOf(selectedWord))
       arrayIndexAlreadyUsed.push(newVocabulary.indexOf(selectedWord))
       
       // every time that a number is selected at random, it checks already used numbers to determine if they are there or not. randArray is actual numbers, while arrayIndexAlreadyUsed is the numbers you cant pick. 
      
        for (i; i < numberOfOptions - 1; i++) {
            random = Math.floor(Math.random()* (newVocabulary.length-1))
    while (arrayIndexAlreadyUsed.isValidIndex(random) === true) {
                random= Math.floor(Math.random()* (newVocabulary.length - 1))
            }
            randArray.push(random);
            arrayIndexAlreadyUsed.push(random);
        }
        
        // places words in array for displaying
        console.log(newVocabulary);
        console.log(randArray);
        i =0;
        array.push(selectedWord);
    for (i; i< numberOfOptions; i++) {
        array.push(newVocabulary[randArray[i]]);
    }
        // sends data to view;
        
        return array;
    }
    
    initModule = function () {
        var view = mla.view.initModule({levelScreen: document.getElementById('selectScreen'),
        resultsScreen: document.getElementById('resultsScreen'),
        homeScreen: document.getElementById('mainScreen'),
        gameScreen: document.getElementById('gameScreen')});
        var model = mla.model.initModule();
        var controller = new Controller(view,model);
        view.setController(controller);
        view.viewScreenListeners();
        controller.display();
        return controller; 
        
    }
    
    return {initModule:initModule};

}())