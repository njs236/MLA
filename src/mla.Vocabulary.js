mla.Vocabulary = function (newVocabName, newArrayOfWords) {
    this.vocabName = newVocabName;
    addWords(newArrayOfWords);
}

mla.Vocabulary.prototype.addWords = function(newArrayOfWords) {
    /*
    V1.0 This is a first draft of the Add Words method which splits up the array into:
    id = name of Vocab with a number to identify
    maoriWord = Maori word of word
    englishWord = English Word of word
    this information is passed to the word.
    */
    for (i; i < newArrayOfWords.length/ 2; i++) {
        var word = new Word(this.vocabName+i, newArrayOfWords[2*i], newArrayOfWords[2*i+1])
    this.allMyWords.push(word);
    }    
    
}

mla.Vocabulary.prototype.addWordToVocab = function (newArrayOfWord) {
    var word = new Word(this.vocabName+this.allMyWords.length, newArrayOfWord[0], newArrayOfWord[1])
    this.allMyWords.push(word);
}