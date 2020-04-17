function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question(" The role of borax in cold creams is ", ["anti-microbial agent", " to provide fine particles to polish skin"," in-situ emulsifier", " antioxidant"], "anti-microbial agent"),

    new Question(" Choose the right combination: ", [" Quinine', antimalarial, isoquinoline alkaloid ", " Reserpine, -antihypertensive, indole alkaloid"," Quantitative microscopy, stomatal number, myrrh", "Palmitic acid, salicylic acid , fatty acids"], " Reserpine, -antihypertensive, indole alkaloid"),


    new Question("Triterpenoids are active constituents of", ["Jaborandi", " Rhubarb ","Stramonium", " Brahmi"], " Brahmi"),

    new Question(" Alkaloids are NOT precipitated by", ["Mayer's reagent", "Dragendroff Reagent ","Picric acid", "Millon's reagent"], "Millon's reagent"),

  new Question(" Anisocytic stomata are present in", ["Senna", "Digitalis","Belladonn", "Coca"], "Belladonn"),
    new Question("Tropane alkaloids are NOT present in ", ["Datura stramonium", "Erythroxylum coca ","Duboisia myoporoides ", "Lobelia inflata"], "Lobelia inflata"),
      new Question(" Guggul lipids are obtained from ", ["Commiphora molmol", "Boswellia serrata","Commiphora wightii ", " Commiphora abyssinica"], "Commiphora wightii"),
        new Question("An example of N-glycoside is", ["Adenosine", "Sinigrin","Rhein-8-glucoside", "Aloin"], "Adenosine"),
          new Question("One mg of Lycopodium spores used in quantitative microscopy contains an average of ", ["94,000 spores", "92,000 spores","90,000 spores", "91,000 spores"], "94,000 spores"),
            new Question(" Select the correc: combination of drugs for the treatment of patients suffering from Hepatitis C", ["Interferon with Ribavirin", "Interferon with Zidovudine "," Interferon with Stavudine", "Interferon with"], "Interferon with Zidovudine"),
];


var quiz = new Quiz(questions);


populate();
