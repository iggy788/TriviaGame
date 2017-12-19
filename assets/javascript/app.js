// START JAVASCRIPT
// ----------------------------------------------------------------------------------------------
$('document').ready(function() {
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

    // CHECK ANSWERS
    // ----------------------------------------------------------------------------------------------

    $('#choicesone').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[0].correctAnswer;
        if (userPick != allQuestions[0].correctAnswer) {
            incorrectAnswer++;
            alert('WRONG');
        } else {
            correctAnswer++;
            alert('CORRECT');
        }
    });

    $('#choicestwo').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[1].correctAnswer;
        if (userPick != allQuestions[1].correctAnswer) {
            incorrectAnswer++;
            alert('WRONG');
        } else {
            correctAnswer++;
            alert('CORRECT');
        }
    });

    $('#choicesthree').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[2].correctAnswer;
        if (userPick != allQuestions[2].correctAnswer) {
            incorrectAnswer++;
            alert('WRONG');
        } else {
            correctAnswer++;
            alert('CORRECT');
        }
    });

    $('#choicesfour').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[3].correctAnswer;
        if (userPick != allQuestions[3].correctAnswer) {
            incorrectAnswer++;
            alert('WRONG');
        } else {
            correctAnswer++;
            alert('CORRECT');
        }
    });

    $('#choicesfive').on('click', 'button', function(e) {
        userPick = $(this).data('id');
        allQuestions[4].correctAnswer;
        if (userPick != allQuestions[4].correctAnswer) {
            incorrectAnswer++;
            alert('WRONG');
        } else {
            correctAnswer++;
            alert('CORRECT');
        }
    });

    // MAIN PROCESS
    // ----------------------------------------------------------------------------------------------
    displayTrivia();
    counter = setInterval(timer, 1000);
});