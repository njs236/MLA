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
    }
}

