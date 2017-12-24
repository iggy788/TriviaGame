function submitAnswers() {
    var total = 5;
    var score = 0;
    var q1 = $('input[name=q1]:checked').val();
    var q2 = $('input[name=q2]:checked').val();
    var q3 = $('input[name=q3]:checked').val();
    var q4 = $('input[name=q4]:checked').val();
    var q5 = $('input[name=q5]:checked').val();
    var count = 30;


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
/*for (var i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }
        alert('You Scored ' + score + ' out of' + total);
	}*/


/*for (var i = 1; i <= total; i++) {
  if (eval('input[name=q1]' + i) == null || eval('input[name=q1]' + i) == '');
  {
    alert('You missed question ' + i);
    return false;
  }
}

// Set Correct Answers
var answers = [
  'Jud Heathcote',
  'Jason Richardson',
  'Indiana State',
  '9',
  'Tom Izzo',
];

// Check Answers
for (var i = 1; i <= total; i++) {
  if (eval('q' + i) === answers[i - 1]) {
    score++;
  }
  alert('You Scored ' + score + ' out of' + total);
}


    if (q1 == null || q1 == ''); {
        alert('You missed question ' + 1);
        return false;
    }

    if (q2 == null || q2 == ''); {
        alert('You missed question ' + 2);
        return false;
    }
    if (q3 === null || q3 === ''); {
        alert('You missed question ' + 3);
        return false;
    }
    if (q4 === null || q4 === ''); {
        alert('You missed question ' + 4);
        return false;
    }
    if (q5 === null || q5 === ''); {
        alert('You missed question ' + 5);
        return false;
    }

// MAIN PROCESS
// ----------------------------------------------------------------------------------------------*/


// Array holds all of the drinks available
/*var questionList = [
    "Who was the head coach of the MSU basketball team when they won the 1979 National Championship?",
    "Which one of these players from the 2000 National Champions team, was not from Flint, Michigan?", "What team did MSU play in 1979 to win the National Championship?",
    "How many times did Michigan state basketball go to the final four?",
    "Who did the Michigan State Spartans Mens Basketball team hire as their head mens basketball coach in 1995?"
];
// This line of jQuery selects the div with the matching id (#drink-options)
var questionDiv = $("#questions");
// For Loop then loops through our total drink list...
for (var i = 0; i < questionList.length; i++) {
    // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    var showAllQuestions = $("<div>" + questionList[i] + "</div>");
    // It then adds this new div to the drinkList div.
    questionDiv.append(showAllQuestions);
}
var choiceList = [
    "Who was the head coach of the MSU basketball team when they won the 1979 National Championship?",
    "Which one of these players from the 2000 National Champions team, was not from Flint, Michigan?", "What team did MSU play in 1979 to win the National Championship?",
    "How many times did Michigan state basketball go to the final four?",
    "Who did the Michigan State Spartans Mens Basketball team hire as their head mens basketball coach in 1995?"
];
// This line of jQuery selects the div with the matching id (#drink-options)
var choiceDiv = $("#choices");
// For Loop then loops through our total drink list...
for (var i = 0; i < choiceList.length; i++) {
    // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    var showAllChoices = $("<div>" + choiceList[i] + "</div>");
    // It then adds this new div to the drinkList div.
    choiceDiv.append(showAllChoices);
}*/