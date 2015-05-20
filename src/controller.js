mla.controller = (function (){
    var initModule, Controller, selectedWord, newVocabulary, splicedVocabulary, newTable;
    
    Controller = function (view,model) {
        this.view = view;
        this.model = model;
    }
    
    Controller.prototype.Vocabulary = function () {
        this.model.addVocabulary('colors',['Mā','White','Whero','Red','Kārera','Light green','Māwhero','Pink','Kōwhai','Yellow','Kākāriki/Māota','Dark green','Pango','Black','Parauri/Paraone','Brown','Kahurangi','Blue','Karaka','Orange']);
        this.model.addVocabulary('environment',['maunga','mountain','ika','fish','awa','river','roto','lake','moana','sea','ngahere','forest','puke','hill','manu','bird','kereru','wood pigeon','kiore','rat','kiwi','kiwi','piwakawaka','fantail'])
        this.model.addVocabulary('greetings/farewells',['Tēnā Koe','Hello to 1 person','Tēnā Kōrua','Hello to 2 people','Tēnā Koutou','Hello to 3 or more','Kia ora','Hello','Ata mārie','Good Morning','Mōrena','Morning','Pō mārie','Good Evening','Hei konei rā','Good bye','Hei konā','Good bye','E noho rā','Good bye','Haere rā','Good Bye when leaving'])
        this.model.addVocabulary('numbers',['Tahi / Kotahi','One','Rua','Two','Toru','Three','Whā','Four','Rima','Five','Ono','Six','Whitu','Seven','Waru','Eight','Iwa','Nine','Tekau','Ten','rau','Hundred','Mano','Thousand','E hia?','How many?(Things)','Tokohia?', 'How many? (People)'])
        this.model.addVocabulary('personal pronouns', ['au','I or me','koe','You','ia','he or she','tāua','Us two','māua','Us two (Excludes listener)','kōrua','You two','rāua','Those two','tātou','Us all','mātou','Us all (3 or more) (Excludes listener)','koutou','You all (3 or more)','rātou','Them all (three or more)'])
        this.model.addVocabulary('possession/you and I',['Taku/Tōku','My','Tana/Tōna','His/hers','Tau/Tōu','Yours','Aku/Ōku,Mine','ahau','I or me','au','I or me','koe','You','ia','He or She','Ko wai?','Who?'])
        this.model.addVocabulary('Saying How You Are',['Kei te pēhea koe?','How are you?','Kei te pai','Good','Kei te māuiui','Sick','Kei te ngenge','Tired','Kei te wherū','Under the weather','Kei te ora','Living','Kei te rūhā','Worn out or Exhausted','Kei te hiakai','Hungry','Kei te hiamoe','Sleepy','Kei te hia inu','Thirsty','Kei te kaha tonu','Still going strong','Kei te pērā tonu','Same ole','Kei te pokea e te mahi','Overworked','Kei raro e putu ana','Snowed under','Kāore i te pai','Not good'])
        console.log(this.model.allMyVocabulary[0])
    }
    
    Controller.prototype.displayLevelSelectScreen = function () {
        
        
    }
    
    Controller.prototype.loadVocabulary = function (vocabulary) {
        newVocabulary = vocabulary.allMyWords.slice();
        return {newVocabulary, vocabulary};
        
    }
    
    Controller.prototype.randomSelectionOfWord = function () {
        var rand = Math.rand*vocabulary.length;
        selectedWord = vocabulary[rand];
        splicedVocabulary = newVocabulary.splice(rand, 1);
        console.log(selectedWord);
        
    }
    
    Controller.prototype.loadTable = function () {
        
    }
    
    initModule = function (view,model) {
        view.setController(this);
        view.viewScreenListeners();
        return new Controller(view,model);  
    }
    
    return {initModule:initModule};

}())