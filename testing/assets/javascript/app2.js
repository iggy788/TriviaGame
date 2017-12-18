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