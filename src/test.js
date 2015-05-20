mla.test = {
    model: null,
    controller : null,
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
    console.log(rand);
    console.log(mla.test.model.allMyVocabulary)
        var vocabulary = mla.test.controller.loadVocabulary(mla.test.model.allMyVocabulary[rand])
        console.log(vocabulary)
    },
    
    loadWord : function () {
    mla.test.controller.randomSelectionOfWord();
    }
}

