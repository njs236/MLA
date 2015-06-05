mla.controller = (function (){
    var initModule, Controller, selectedWord, newVocabulary, splicedVocabulary, newTable, that;
    splicedVocabulary = [];
    
    Controller = function (view1, model1) {
       this.view = view1;
        this.model = model1;
        this.returnModel = function () {
            return this.model;
        };
        this.returnView = function () {
            return this.view;
        }
        this.display = function () {
            var items = this.returnModel().getMyVocabsForDisplay();
            this.returnView().writeSelectTable(items);
        };
        
        
    };
    
    
    /**********************************
    
    Select Screen
    
    **********************************/

    Controller.prototype.selectGame = function () {
        /* v1.1 Prepares the view for the game and gives information to the view.
        */
        var id = this.id;
        console.log(this.id);
        var vocab = that.model.findVocab(id), word;
        that.loadVocabulary(vocab);
        console.log(newVocabulary);
        that.randomSelectionOfWord();
        that.loadTable(4);
    }
    /******************************
    
    Game Screen
    
    *********************************/
    
    Controller.prototype.loadVocabulary = function (vocabulary) {
        console.log(vocabulary);
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
        randArray.randomizeArray();

        if (selectedWord.hasOwnProperty('image')) {
            array.push(selectedWord.getImage());
        }else {
        array.push(selectedWord.getEnglishWord())
        };
    for (i= 0; i< numberOfOptions; i++) {
        array.push(newVocabulary[randArray[i]].getMaoriWord());
    }
        // sends data to view;
        ;
        console.log(array);
        if (selectedWord.hasOwnProperty('image')) {
            this.view.displayImageQuestion(array);
        } else {
        this.view.displayTextQuestion(array);
        };
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
        that = controller;
        return controller; 
        
    }
    
    return {initModule:initModule};

}())