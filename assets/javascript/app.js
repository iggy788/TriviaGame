// START JAVASCRIPT
// ----------------------------------------------------------------------------------------------
$('document').ready(function() {

    $('main').hide();
    $('results').hide();


    // GLOBAL VARIABLES
    // ----------------------------------------------------------------------------------------------
    var userPick;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unAnswer = 0;
    var question = 0;
    var count = 30;


    // SET ALL QUESTIONS ARRAY
    // ----------------------------------------------------------------------------------------------
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

    // DISPLAY TRIVIA
    // ----------------------------------------------------------------------------------------------
    function displayTrivia() {
        // POPULATE QUESTION 1
        // ----------------------------------------------------------------------------------------------
        $('#questionone').html(allQuestions[0].question);
        question++;
        var choicesArr = allQuestions[0].choices;
        var buttonsArr = [];
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choicesone').append(button);
        }
        // POPULATE QUESTION 2
        // ----------------------------------------------------------------------------------------------
        $('#questiontwo').html(allQuestions[1].question);
        question++;
        var choicesArr = allQuestions[1].choices;
        var buttonsArr = [];
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choicestwo').append(button);
        }
        // POPULATE QUESTION 3
        // ----------------------------------------------------------------------------------------------
        $('#questionthree').html(allQuestions[2].question);
        question++;
        var choicesArr = allQuestions[2].choices;
        var buttonsArr = [];
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choicesthree').append(button);
        }
        // POPULATE QUESTION 4
        // ----------------------------------------------------------------------------------------------
        $('#questionfour').html(allQuestions[3].question);
        question++;
        var choicesArr = allQuestions[3].choices;
        var buttonsArr = [];
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choicesfour').append(button);
        }
        // POPULATE QUESTION 5
        // ----------------------------------------------------------------------------------------------
        $('#questionfive').html(allQuestions[4].question);
        question++;
        var choicesArr = allQuestions[4].choices;
        var buttonsArr = [];
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choicesfive').append(button);
        }
    }

    // SET TIMER
    // ----------------------------------------------------------------------------------------------
    function timer() {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }
        $('#timer').html('Time remaining: ' + '00:' + count + ' secs');
    }

    function timeUp() {
        // in the element with an id of time-left add an h2 saying Time's Up!
        console.log('done');
        $('#timer').append("<h2>Time's Up!</h2>");
        console.log('time is up');
        submitAnswers();
    }

    // CHECK ANSWERS
    // ----------------------------------------------------------------------------------------------

    /*
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
    */


    $('#choicesone').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[0].correctAnswer;
        if (userPick != allQuestions[0].correctAnswer) {
            incorrectAnswer++;
        } else {
            correctAnswer++;
        }
    });

    $('#choicestwo').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[1].correctAnswer;
        if (userPick != allQuestions[1].correctAnswer) {
            incorrectAnswer++;
        } else {
            correctAnswer++;
        }
    });

    $('#choicesthree').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[2].correctAnswer;
        if (userPick != allQuestions[2].correctAnswer) {
            incorrectAnswer++;
        } else {
            correctAnswer++;
        }
    });

    $('#choicesfour').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[3].correctAnswer;
        if (userPick != allQuestions[3].correctAnswer) {
            incorrectAnswer++;
        } else {
            correctAnswer++;
        }
    });

    $('#choicesfive').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[4].correctAnswer;
        if (userPick != allQuestions[4].correctAnswer) {
            incorrectAnswer++;
        } else {
            correctAnswer++;
        }

        var total = 5;
        totalScore = 'You Scored ' + correctAnswer + ' out of ' + total;
        $('#results').html(totalScore);
        alert('You Scored ' + correctAnswer + ' out of ' + total);
    });

    // MAIN PROCESS
    // ----------------------------------------------------------------------------------------------

    $('.btn-get-started').click(function start() {
        $('main').show();
        $('#welcome').hide();
        displayTrivia();
        counter = setInterval(timer, 1000);
        setTimeout(timeUp, 1000 * 30);

    });


});