mla.Model = function () {
    this.learningSpeed = newLearningSpeed;
    this.allMyVocabulary = [];
}

mla.Model.prototype.addVocabulary(vocabName, arrayOfWords) {
    var vocabulary = new mla.Vocabulary(vocabName, arrayOfWords);
    this.allMyVocabulary.push(vocabulary);
}