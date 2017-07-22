var currentQues = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var restartQuiz = document.getElementById('restartBtn');

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOpt = document.querySelector('input[type=radio]:checked');
    if (!selectedOpt) {
        alert('Please select an option!');
        return;
    }
    // var score = 0;
    var answer = selectedOpt.value;
    console.log(selectedOpt)
    console.log(answer)
    console.log();
    console.log(questions[currentQues].answer)

    if (questions[currentQues].answer == answer) {
         score += 10;
        console.log(score);

    }

    selectedOpt.checked = false;
    currentQues++;
    if (currentQues == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if (currentQues == totQuestions) {
        var timer = document.getElementById('clockdiv');
        timer.style.display = 'none';
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = "You Scored: " + score;
        restartQuiz.style.display = '';
        return;
        
    }

    loadQuestion(currentQues);
}

loadQuestion(currentQues);

function restart(){
    location='takeQuiz.html'
}