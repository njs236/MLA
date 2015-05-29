mla.model = (function() {
    var initModule, Model, Word, Vocabulary;
    
    Model = function () {
        this.allMyVocabulary = [];
        this.allMyWords = [];
    };
    
    Model.prototype.findWord = function (id) {
        var vocabLoop = 0, wordLoop = 0;
        for (vocabLoop; vocabLoop < this.allMyVocabulary.length; vocabLoop++){
            wordLoop = 0;
            for (wordLoop; wordLoop < this.allMyVocabulary[vocabLoop].allMyWords.length; wordLoop++) {
                if (this.allMyVocabulary[vocabLoop].allMyWords[wordLoop].Name == id) {
                    return this.allMyVocabulary[vocabLoop].allMyWords[wordLoop];
                }
            }
        }
        return ;
    }
    
    Model.prototype.getMyVocabsForDisplay = function () {
            var i = 0;
            var array = [];
            for (i; i<this.allMyVocabulary.length; i++) {
                array.push(this.allMyVocabulary[i].vocabName);
            }
            return array;
        }
        
    Model.prototype.findVocab = function (id) {
        var i = 0;
        for (i; this.allMyVocabulary.length; i++ ) {
            if (this.allMyVocabulary[i].vocabName == id ) {
                return this.allMyVocabulary[i];
            }
        }
        return;
    }
    
    Model.prototype.addVocabulary = function(vocabName, arrayOfWords) {
        var vocabulary = new Vocabulary(vocabName, arrayOfWords);
        this.allMyVocabulary.push(vocabulary);
        return vocabulary;
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
        var word = new Word(this.vocabName+i, newArrayOfWords[2*i+1], newArrayOfWords[2*i])
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