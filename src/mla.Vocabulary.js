mla.Vocabulary = function (newVocabName, newArrayOfWords) {
    this.vocabName = newVocabName;
    addWords(newArrayOfWords);
}

mla.Vocabulary.prototype.addWords(newArrayOfWords) {
    for (i; i < newArrayOfWords.length/ 2; i++)
        var word = new Word(newArrayOfWords[i], newArrayOfWords[i+1])
        
    
}