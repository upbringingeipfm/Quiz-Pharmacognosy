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
    new Question("Entire parts of the following drugs are effective, except", [" Ergot", "Belladonna","Ephedra", "Clove"], "Clove"),

    new Question("Select the drug, which is not belonging to glycoside class?", ["Digitalis", "senna","Nux vomica", "Cascara"], "Nux vomica"),


    new Question("Drug is not under the class of organized drug :", ["Leaves", "flowers","fruits", "Gums"], "Gums"),


    new Question("Drug is not under the seed class ", ["Nux vomica", "Digitalis","stropanthus", "Ispgol"], "Digitalis"),

  new Question("Drug not belonging to volatile oil class:", ["Peppermint", "Clove","Castor oil", "Garlic"], "Castor oil"),
    new Question("______ is not used as cardiotonics", ["Digitalis", "Cincona","Squill", "Stropanthus"], "Cincona"),
      new Question("Drug is used as antimalerial :", ["Ashwagandha", "Tulsi","Ginseng", "Artemesia"], "Artemesia"),
        new Question("Tannins give colour with iron compound :", ["Pale yellow", "Blue black","Light pink", "Orange"], "Light pink"),
          new Question("Flower bud of drug showing medicinal importance:", ["Saffrom", "Clove","Fig", "Caraway"], "Clove"),
            new Question("Alkaloids are ________ type of substances", ["Acid", "Neutral","Chemical", "Basic nitrogenous"], "Basic nitrogenous	"),
];


var quiz = new Quiz(questions);


populate();
