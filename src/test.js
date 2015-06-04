mla.test = {
    model: null,
    controller : null,
    newVocabulary: null,
    view: null,
    initialize : function (model, controller, view) {
        this.model = model;
        this.controller = controller;
        this.view = view;
    },
    
    loadVocabulary : function () {
        /* Expectation: 
        The test function should return a list of vocabulary, that should be a copy
        of the original vocabulary for the purpose of random selection.
        */
    var rand = Math.floor(Math.random()*( mla.test.model.allMyVocabulary.length-1)) ;
        var vocabulary = mla.test.controller.loadVocabulary(mla.test.model.allMyVocabulary[rand])
        console.log(vocabulary)
        mla.test.newVocabulary = vocabulary.newVocabulary;
    },
    
    loadWord : function () {
        /*Expectation:
        
        returns a word from a list of vocabulary that has been loaded. 
        */
        var word;
        word = mla.test.controller.randomSelectionOfWord();
        console.log(word);
    },
    
    returnVocabulary : function () {
        /* Expectation: Should return the list of all my Vocabulary.
         */
         
         console.log(mla.test.model.allMyVocabulary)
    },
    
    returnDisplayVocabs : function () {
       /* Expectation: Should return an array with names of Vocabulary 

        */
       
       console.log(mla.test.model.getMyVocabsForDisplay())
        
    },
    
    selectGame : function (id) {
        /*Expectation: game will return a vocab list;
        
        */
        var game = mla.test.controller.selectGame(id)
        console.log(game)
    },
    
   showModel: function () {
     console.log(this.model);  
       
   },
    
    addVocabulary : function (vocabName, array) {
        /*Expectation: will return a vocab Object with name and words.
        
    
        */
        var vocab = mla.test.model.addVocabulary(vocabName, array);
        console.log(vocab)
    },
    
    findWord : function (id) {
        /* expectation: should return a word according to the name of its container
        
        */
        
        var word = mla.test.model.findWord(id);
        console.log(word);
    },
    
    returnAllFilesWithImagesOrSounds : function () {
        var array = mla.test.model.withMedia();
        console.log(array);
        
    },
    
    displayWord : function (numberOfWords) {
        mla.test.loadVocabulary();
        mla.test.loadWord();
        array = mla.test.controller.loadTable(numberOfWords);
        
        console.log(array);
    } 
    
}

