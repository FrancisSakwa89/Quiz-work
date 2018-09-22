var testResults = function(one, two ,three, four){
return one + two + three + four;
}
  $(document).ready(function(){
  $(".begin").click(function(){
    $("#test").fadeToggle("slow");
  });
  $("form#test").submit(function(event){
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var result = testResults(question1, question2 ,question3, question4, question5, question6);

    $("#display").text("Your score is:" + result);

    event.preventDefault();
    $(".result").show();
  });
});
