// GLOBAL VARIABLES
// -----------------------------------------------------------------------------------------------
var allQuestions = [{
        question: 'Who was the head coach of the MSU basketball team when they won the 1979 National Championship?',
        choices: ['Tom Izzo', 'Chester Brewer', 'Jud Heathcote', 'Magic Johnson'],
        correctAnswer: 2,
    },
    {
        question: 'Which one of these players from the 2000 National Champions team, was not from Flint, Michigan?',
        choices: [
            'Charlie Bell',
            'Mateen Cleaves',
            'Morris Peterson',
            'Jason Richardson',
        ],
        correctAnswer: 3,
    },
    {
        question: 'What team did MSU play in 1979 to win the National Championship?',
        choices: [
            'Kentucky Wildcats',
            'North Carolina Tar Heels',
            'Indiana State',
            'DePaul',
        ],
        correctAnswer: 2,
    },
    {
        question: 'How many times did Michigan state basketball go to the final four?',
        choices: ['3', '9', '8', '12'],
        correctAnswer: 1,
    },
    {
        question: 'Who did the Michigan State Spartans Mens Basketball team hire as their head mens basketball coach in 1995?',
        choices: ['Jud Heathcoat', 'Jed Clampett', 'Tom Izzo', 'Tommy Amaker'],
        correctAnswer: 2,
    },
];

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var count = 45;

// FUNCTIONS
// -----------------------------------------------------------------------------------------------
function timer() {
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }

    $('#timer').html('Time remaining: ' + '00:' + count + ' secs');
}

function displayTrivia() {
    $('#question').html(allQuestions[0].question);
    question++;

    var choicesArr = allQuestion[0].choices;
    var buttonsArr = [];

    for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
    }
}
// MAIN PROCESS
// -----------------------------------------------------------------------------------------------
$(document).ready(function() {
    $('main').hide();
    $('results').hide();

    $('.btn-get-started').click(
        function start() {
            $('main').show();
            $('#welcome').hide();
            counter = setInterval(timer, 1000);
            displayTrivia();
        });

    $('.btn-outline-submit').click(function start() {
        $('results').show();
        $('main').hide();

    });
    $('.btn-primary').click(function start() {
        $('results').hide();
        $('main').hide();
        $('#welcome').show();
    });

    function submitAnswers() {
        var total = 5;
        var score = 0;
        var q1 = $('input[name=q1]:checked').val();
        var q2 = $('input[name=q2]:checked').val();
        var q3 = $('input[name=q3]:checked').val();
        var q4 = $('input[name=q4]:checked').val();
        var q5 = $('input[name=q5]:checked').val();



        // Set Correct Answers
        var answers = ['Jud Heathcote', 'Jason Richardson', 'Indiana State', '9', 'Tom Izzo'];
        // Check Answers
        if (q1 === answers[0]) {
            score++;
        }

        if (q2 === answers[1]) {
            score++;
        }

        if (q3 === answers[2]) {
            score++;
        }

        if (q4 === answers[3]) {
            score++;
        }

        if (q5 === answers[4]) {
            score++;
        }
        totalScore = 'You Scored ' + score + ' out of ' + total;
        $('#results').html(totalScore);
        alert('You Scored ' + score + ' out of ' + total);
    };

    /*// Scoring
    var total = 5;
    var score = 0;



    $('.btn-outline-submit').on('submit', function(event) {
        event.preventDefault();
        checkAns();
        currentquestion++;
        //var $answerOne = $(this).find('[name=q1]');
        // scoped to only find things that are inside the form where the submit event occurred
        //$('.questionForm [name=q1]'); is the same as above
        //var answerOne = $answerOne.val();
        console.log(answerOne);
    });*/
});


// When user submits the form
// Capture the Value of what they Select
// Compare the list of answers the User selected to the list of Indexes that contains the right answer
// Then post how many answers they got right and how many they got wrong
// Then provide a Button to play again


// Listen for the submit event on the form
//$('.questionForm').on('submit', function(event) {
//event.preventDefault();
//$('input[name="' + name + '"]').val([SelectedValue]);

//var $answerOne = $('#q1');
//var $answerTwo = $('#q2');
//var $answerThree = $('#q3');
//var $answerFour = $('#q4');
//var $answerFive = $('#q5');
//var answer = $answerOne.val();

//console.log(answer);
//if (answer === 'b') {
//$('results').show();
//$('#results').html(score);
//score++;
//alert('You Win!');
//}
//$('results').show();
//$('#results').html(score);
//score++;
//alert('You Lose!');