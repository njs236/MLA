mla.model = (function() {
    var initModule, Model;
    
    Model = function () {
        this.allMyVocabulary = [];
        
        this.allMyWords = [];
    };
    
    Model.prototype.addVocabulary = function(vocabName, arrayOfWords) {
        var vocabulary = new Vocabulary(vocabName, arrayOfWords);
        this.allMyVocabulary.push(vocabulary);
    }
    
    Vocabulary = function (vocabName, arrayOfWords) {
        this.vocabName = vocabName;
        this.allMyWords = [];
        this.addWords(arrayOfWords);
    }
    
    Vocabulary.prototype.addWords = function(newArrayOfWords) {
       /*
    V1.0 This is a first draft of the Add Words method which splits up the array into:
    id = name of Vocab with a number to identify
    maoriWord = Maori word of word
    englishWord = English Word of word
    this information is passed to the word.
    */
    var i = 0;
    for (i; i < newArrayOfWords.length/ 2; i++) {
        var word = new Word(this.vocabName+i, newArrayOfWords[2*i], newArrayOfWords[2*i+1])
    this.allMyWords.push(word);
    }     
    }
    
    Word = function (newName, newEnglishWord, newMaoriWord) {
        this.Name = newName;
        this.englishWord = newEnglishWord;
        this.maoriWord = newMaoriWord;
    }
    
    initModule = function () {
        return new Model;
    }
    
    return {initModule: initModule};
} ())