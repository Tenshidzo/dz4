var questions = [
    "JavaScript - це мова програмування?",
    "HTML використовується для стилізації веб-сайтів?",
    "CSS відповідає за логіку програми?",
    "Linux - це операційна система?",
    "Число π (пі) може бути округлено як 3.14?",
    "В С# можна зробити множинне спадкування?"
  ];
  var correctAnswers = [true, false, false, true, true, false];
  var userAnswers = [];
  document.write('<table>');
  document.write('<tr><th>Питання</th><th>Відповідь</th><th>Бали</th></tr>');
  var totalPoints = 0;
  for (var i = 0; i < questions.length; i++) {
    var userResponse = confirm(questions[i]);
    userAnswers.push(userResponse);
    var points = userResponse === correctAnswers[i] ? 10 : 0;
    totalPoints += points;
    document.write('<tr>');
    document.write('<td>' + questions[i] + '</td>');
    document.write('<td>' + (userResponse ? 'Так' : 'Ні') + '</td>');
    document.write('<td>' + points + '</td>');
    document.write('</tr>');
  }
  
  document.write('<tr><td colspan="2" style="text-align: right;">Підсумкова сума балів:</td><td>' + totalPoints + '</td></tr>');
  document.write('</table>');