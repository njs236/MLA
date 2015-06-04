mla.model = (function() {
    var initModule, Model, Word, Vocabulary;
    
    Model = function () {
        this.allMyVocabulary = [];
        this.allMyWords = [];
    };
    
   Model.prototype.loadData = function () {
       
   this.addVocabulary('colors',['Mā','White','Whero','Red','Kārera','Light green','Māwhero','Pink','Kōwhai','Yellow','Kākāriki/Māota','Dark green','Pango','Black','Parauri/Paraone','Brown','Kahurangi','Blue','Karaka','Orange']);
        this.addVocabulary('environment',['maunga','mountain','ika','fish','awa','river','roto','lake','moana','sea','ngahere','forest','puke','hill','manu','bird','kereru','wood pigeon','kiore','rat','kiwi','kiwi','piwakawaka','fantail'])
        this.addVocabulary('greetings/farewells',['Tēnā Koe','Hello to 1 person','Tēnā Kōrua','Hello to 2 people','Tēnā Koutou','Hello to 3 or more','Kia ora','Hello','Ata mārie','Good Morning','Mōrena','Morning','Pō mārie','Good Evening','Hei konei rā','Good bye','Hei konā','Good bye','E noho rā','Good bye','Haere rā','Good Bye when leaving'])
        this.addVocabulary('numbers',['Tahi / Kotahi','One','Rua','Two','Toru','Three','Whā','Four','Rima','Five','Ono','Six','Whitu','Seven','Waru','Eight','Iwa','Nine','Tekau','Ten','rau','Hundred','Mano','Thousand','E hia?','How many?(Things)','Tokohia?', 'How many? (People)'])
        this.addVocabulary('personal pronouns', ['au','I or me','koe','You','ia','he or she','tāua','Us two','māua','Us two (Excludes listener)','kōrua','You two','rāua','Those two','tātou','Us all','mātou','Us all (3 or more) (Excludes listener)','koutou','You all (3 or more)','rātou','Them all (three or more)'])
        this.addVocabulary('possession/you and I',['Taku/Tōku','My','Tana/Tōna','His/hers','Tau/Tōu','Yours','Aku/Ōku,Mine','ahau','I or me','au','I or me','koe','You','ia','He or She','Ko wai?','Who?'])
        this.addVocabulary('Saying How You Are',['Kei te pēhea koe?','How are you?','Kei te pai','Good','Kei te māuiui','Sick','Kei te ngenge','Tired','Kei te wherū','Under the weather','Kei te ora','Living','Kei te rūhā','Worn out or Exhausted','Kei te hiakai','Hungry','Kei te hiamoe','Sleepy','Kei te hia inu','Thirsty','Kei te kaha tonu','Still going strong','Kei te pērā tonu','Same ole','Kei te pokea e te mahi','Overworked','Kei raro e putu ana','Snowed under','Kāore i te pai','Not good'])
        // awa
        var word = this.findWord('environment2');
        word.maoriSound = 'awa.wav';
        word.image = 'awa.jpg';
        //ika
        var word = this.findWord('environment1');
        word.maoriSound = 'ika.wav';
        word.image = 'ika.jpg';
        //kereru
        var word = this.findWord('environment8');
        word.maoriSound = 'kereru.wav';
        word.image = 'kereru.jpg';
        //kiore
        var word = this.findWord('environment9');
        word.maoriSound = 'kiore.wav';
        word.image = 'kiore.jpg';
        //kiwi
        var word = this.findWord('environment10');
        word.maoriSound = 'kiwi.wav';
        word.image = 'kiwi.jpg';
        //manu
        var word = this.findWord('environment7');
        word.maoriSound = 'manu.wav';
        word.image = 'manu.jpg';
        //maunga
        var word = this.findWord('environment0');
        word.maoriSound = 'maunga.wav';
        word.image = 'maunga.jpg';
        //moana
        var word = this.findWord('environment4');
        word.maoriSound = 'moana.wav';
        word.image = 'moana.jpg';
        //ngahere
        var word = this.findWord('environment5');
        word.maoriSound = 'ngahere.wav';
        word.image = 'ngahere.jpg';
        //piwakawaka
        var word = this.findWord('environment11');
        word.maoriSound = 'piwakawaka.wav';
        word.image = 'piwakawaka.jpg';
        //puke
        var word = this.findWord('environment6');
        word.maoriSound = 'puke.wav';
        word.image = 'puke.jpg';
        //roto
        var word = this.findWord('environment3');
        word.maoriSound = 'roto.wav';
        word.image = 'roto.jpg';
   }
   Model.prototype.withMedia = function () {
       var array = [];
            var vocabLoop = 0, wordLoop = 0;
        for (vocabLoop; vocabLoop < this.allMyVocabulary.length; vocabLoop++){
            wordLoop = 0;
            for (wordLoop; wordLoop < this.allMyVocabulary[vocabLoop].allMyWords.length; wordLoop++) {
                if (this.allMyVocabulary[vocabLoop].allMyWords[wordLoop].hasOwnProperty('maoriSound') || this.allMyVocabulary[vocabLoop].allMyWords[wordLoop].hasOwnProperty('image')) {
                    array.push(this.allMyVocabulary[vocabLoop].allMyWords[wordLoop]);
                }
            }
        }
       return array;
   }
    
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
    };
    
    Model.prototype.getMyVocabsForDisplay = function () {
            var i = 0;
            var array = [];
            for (i; i<this.allMyVocabulary.length; i++) {
                array.push(this.allMyVocabulary[i].vocabName);
            }
            console.log(array);
            return array;
        };
        
    Model.prototype.findVocab = function (id) {
        var i = 0;
        for (i; this.allMyVocabulary.length; i++ ) {
            if (this.allMyVocabulary[i].vocabName == id ) {
                return this.allMyVocabulary[i];
            }
        }
        return;
    };
    
    Model.prototype.addVocabulary = function(vocabName, arrayOfWords) {
        var vocabulary = new Vocabulary(vocabName, arrayOfWords);
        this.allMyVocabulary.push(vocabulary);
        return vocabulary;
    };
    
    
    Vocabulary = function (vocabName, arrayOfWords) {
        this.vocabName = vocabName;
        this.allMyWords = [];
        this.addWords(arrayOfWords);
    };
    
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
        this.getEnglishWord = function () {
            return this.englishWord;
        }
    }
    
    Array.prototype.isValidIndex = function (number) {
        return this.indexOf(number) !== -1
    }
    
    Array.prototype.randomizeArray = function () {
        var randPosition = Math.floor(Math.random() * (this.length- 1));
    this.splice(randPosition, 0, this.splice(0, 1)[0]);
    return this; // for testing purposes
    }
    
    initModule = function () {
        var model  = new Model;
        model.loadData();
        return model;
    }
    
    return {initModule: initModule};
} ())