$('document').ready(function() {
    // Hide quiz questions until user clicks get started
    $('#quiz').hide();
    $('#results').hide();

    // SET GLOBAL VARIABLES
    // ----------------------------------------------------------------------------------------------
    // ARRAY OF ALL QUESTIONS
    var allQuestions = [{
            question: 'Who was the head coach of the MSU basketball team when they won the 1979 National Championship?',
            choices: [
                'Tom Izzo',
                'Chester Brewer',
                'Jud Heathcote',
                'Magic Johnson'
            ],
            correctAnswer: 'Jud Heathcote'
        },
        {
            question: 'Which one of these players from the 2000 National Champions team, was not from Flint, Michigan?',
            choices: [
                'Charlie Bell',
                'Mateen Cleaves',
                'Morris Peterson',
                'Jason Richardson'
            ],
            correctAnswer: 'Jason Richardson'
        },
        {
            question: 'What team did MSU play in 1979 to win the National Championship?',
            choices: [
                'Kentucky Wildcats',
                'North Carolina Tar Heels',
                'Indiana State',
                'DePaul'
            ],
            correctAnswer: 'Indiana State'
        },
        {
            question: 'How many times did Michigan state basketball go to the final four?',
            choices: [
                '3',
                '9',
                '8',
                '12'
            ],
            correctAnswer: '9'
        },
        {
            question: 'Who did the Michigan State Spartans Mens Basketball team hire as their head mens basketball coach in 1995?',
            choices: [
                'Jud Heathcoat',
                'Jed Clampett',
                'Tom Izzo',
                'Tommy Amaker'
            ],
            correctAnswer: 'Tom Izzo'
        }
    ];

    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unAnswer = 0;
    var question = 0;
    var count = 31;
    var total = 5;
    var score = 0;

    // After User Clicks Get Started populate the quiz
    // ------------------------------------------------
    $('button').click(function() {
        counter = setInterval(timer, 1000);
        setTimeout(timeUp, 1000 * 31);
        displayQuestions();
        // Have the quiz questions slide down
        $('#quiz').slideDown();
        // Hide the Get Started screen
        $('#welcome').hide();
        // Format the Submit button after the click event occurs
        /*$('.btn-primary').css(
            'cssText',
            'display: block !important; margin:auto; width: 30%;'
        );*/
    });

    // CHECK WHAT WAS CHECKED WHEN SUBMIT WAS CLICKED
    // ------------------------------------------------
    $('#btnSubmit').on('click', function(event) {
        event.preventDefault();
        // we can't use .val() here because
        // that will return only the FIRST checked element.
        //var results = $('input[type=radio]:checked').val();
        var results = $('input[type=radio]:checked');
        // the entire list

        //console.log(results);
        // if there are multiple items checked, then they
        // will be in a jQuery array...a little differen't than
        // what we've done. You may have to do something like
        results.each(function(index, element) {

            //console.log(element.value); // this isn't a jQuery object...weird, I know.
            // if you want it to be a jquery object, you can do something like:
            $(element).val(); // <-- turns it back to jQuery AND gets the value
            // both of these give the same output, but one uses vanilla js (line 98)
            //console.log(index + ':' + $(element).val());
            //console.log(index + ':' + allQuestions[0].correctAnswer);


            if (index + ':' + $(element).val() === index + ':' + allQuestions[0].correctAnswer) {
                score++;
            }

            if (index + ':' + $(element).val() === index + ':' + allQuestions[1].correctAnswer) {
                score++;
            }

            if (index + ':' + $(element).val() === index + ':' + allQuestions[2].correctAnswer) {
                score++;
            }

            if (index + ':' + $(element).val() === index + ':' + allQuestions[3].correctAnswer) {
                score++;
            }

            if (index + ':' + $(element).val() === index + ':' + allQuestions[4].correctAnswer) {
                score++;
            }
            totalScore = 'You Scored ' + score + ' out of ' + total;
            $('#userPicks').html(totalScore);
            // and the other uses jQuery (line 102)
            //console.log($(element).val());
            $('#quiz').hide();
            //console.log(allQuestions[0].correctAnswer);
            //console.log(allQuestions[1].correctAnswer);
            //return $(element).val() === results.correctAnswer;
            $('#results').show();
        });
    });

    // FUNCTIONS
    // ------------------------------------------------

    // DISPLAY QUESTIONS
    // ------------------------------------------------
    function displayQuestions() {
        for (var i = 0; i < allQuestions.length; i++) {
            $('#question').append('<br /><span>' + (i + 1) + '. </span>');
            $('#question').append(allQuestions[i].question);
            $('#question').append('<br />');

            // ADD THE CHOICES FOR EACH QUESTION WITH RADIO BUTTONS
            allQuestions[i].choices.forEach(function(questionChoice) {
                //allQuestions[j].correctAnswer.forEach(function(correctChoice) {
                $('#question').append('<input type="radio" name="' + allQuestions[i].question + '" value="' + questionChoice + '"> ');
                $('#question').append(questionChoice + '<br />');

                //console.log(i);
                // console.log(allQuestions[i].question);
                //console.log(questionChoice);
                // console.log(allQuestions[i].correctAnswer);
            });
            //});
            /*for (var j = 0; j < allQuestions[j].correctAnswer.length; j++) {
                   console.log(allQuestions[j].correctAnswer);
               }*/

            // ADD THE CHOICES FOR EACH QUESTION WITH RADIO BUTTONS
            /*allQuestions[i].correctAnswer.forEach(function(questionAnswer) {

                     console.log(i);
                     console.log(questionAnswer);
                 });*/
        }
    }

    // SET TIMER FUNCTIONS
    // ------------------------------------------------
    function timer() {
        count--;
        if (count < 0) {
            clearInterval(counter);
            return;
        }
        $('#timer').html('Time remaining: ' + count + ' secs');
    }

    function timeUp() {
        // in the element with an id of time-left add an h2 saying Time's Up!
        //console.log('done');
        $('#timer').append("<h2>Time's Up!</h2>");
        //console.log('time is up');
    }
});