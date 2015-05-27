mla.test = {
    model: null,
    controller : null,
    newVocabulary: null,
    initialize : function (model, controller) {
        this.model = model;
        this.controller = controller;
    },
    
    loadVocabulary : function () {
        /* Expectation: 
        The test function should return a list of vocabulary, that should be a copy
        of the original vocabulary for the purpose of random selection.
        */
    var rand = Math.floor(Math.random()) * mla.test.model.allMyVocabulary.length;
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
    }
}

