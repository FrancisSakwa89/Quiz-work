function quizboard() {
   var question1 = document.quizboard.question1.value;
   var question2 = document.quizboard.question2.value;
   var question3 = document.quizboard.question3.value;
   var question4 = document.quizboard.question4.value;
   var question5 = document.quizboard.question5.value;
   var question6 = document.quizboard.question6.value;
   var correct=0;

   if (question1===" YES ")
     correct ++;
}
   if (question2 =="Object oriented computer programming used to create interactive effects within the browser.") {
      correct ++ ;
   }
   if (question3=="Used as aclient side scripting language") {
      correct ++
   }
   if (question4=="On HTML page") {
       correct ++;
   }
   if (question5=="It simplifies javascript code into simple codes using methods") {
      correct ++;
   }
   if (question6=="It has a speed of development") {
      correct ++;
   }
  var messages =["Excellent", "Good work", "Work hard"];
  var photos =["images(1).jpeg", "images(2).jpeg", "images.jpeg"]
  var ranges ;
  if (correct < 1) {
      range = 2;
  }
  else if (correct > 0 && correct < 2) {
      score=2;
  }
  else if (correct > 2) {
     score = 0;
  }
  document.getElementById("after_submit").styleVisibilty ="visible";
  document.getElementById("message").innerHTML=messages[range];
  document.getElementById("number_correct").innerHTML="you got" + correct + "correct.";
  document.getElementById("photos").src=photos[score];
