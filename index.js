var readline_Sync = require("readline-sync");
var chalk = require('chalk');
var user_name = readline_Sync.question(chalk.red("Enter your name: "));
let greeting = readline_Sync.keyInYN(chalk.green(`Hello ${user_name}, Are You (Royal Enfield Lover) ?`));

if (greeting) {
  console.log(chalk.bgCyan("Then I'll Test how much you know about RE?"));
  console.log("=====================================================")
}
else {
  console.log(chalk.bgCyan("UNAUTHORIZED ACESSS DENIED"));
  return -1
}

var user_score = 0;

var highScores = [
  {
    name: "Manish",
    score: 8,
  },

  {
    name: "Shabaz",
    score: 9,
  },
]

var questions =[{
  question: "When did RE Company started? ",
  answer: "England"
}, {
  question: "In India, where is the HeadQuarters?",
  answer: "Chennai"
}, {
  question: "Why is Royal Enfield famous for?",
  answer: "metal body"
},
{
  question: "Founder of Royal Enfield?",
  answer: "Bob smith"
},
{
  question: "Royal Enfield engine --> four stroke or two?",
  answer: "Four"
},
{
  question: "Royal Enfield other name?",
  answer: "Bullet"
},

]

function play(question, answer) {
  var userAnswer = readline_Sync.question(chalk.yellow(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are right!! Moving to next question"));
    user_score = user_score + 2;
  }
  else {
    console.log(chalk.red("You are wrong!! Try other question"));
    console.log(chalk.greenBright("Correct Answer: " + answer));
  }

  console.log("current score:", user_score);
  console.log("-----------------------------------------");
}

function playnow() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);

  }
}


function showScores() {
  console.log(chalk.bgMagenta("🎊YAY! You SCORED🎉🎉: ", user_score));
  console.log("-----------------------------------")

  console.log(chalk.bgMagenta("Check out the high scores, if your score is high check the next one it will append in a new output"));
  console.log("-----------------------------------")
  console.log(chalk.red("High Scores"));
  highScores.map(score => console.log(score.name, " : ", score.score));
}


function updateScore() {
  var top_scores = highScores.map(score => (score.score));
  // console.log(top_scores);
  temp_data = {
    name: user_name,
    score: user_score
  }
  for (var i = 0; i < top_scores.length; i++) {
    if (user_score >= top_scores[i]) {
      highScores.push(temp_data);
      break
    }
    else {
      return errorMessage();
    }

  }
  console.log("===============================================")
  console.log(chalk.bgYellow("Here are your new updated scores, check if your score is appended or else text us will append that"));
  console.log("=================================================")
  console.log(chalk.red("High Scores"));
  console.log((highScores));
}





function errorMessage(){
  console.log("----------------------------------")
  console.log(chalk.red("Sorry!! You didnt cross the high score😔😔!!"));
}

playnow();
showScores();
updateScore();








// function updateScore() {
//   var top_scores = highScores.map(score => (score.score));
//    // var top_names = highScores.map(score => (score.name));
//   //console.log(top_names);
//   temp_data = {
//     name: user_name,
//     score: user_score
//   }
//   for (var i = 0; i < top_scores.length; i++) {
//     if (user_score >= top_scores[i]) {
//       highScores.push(temp_data);
//       break
//     }
//     else {
//       return errorMessage();
//     }

//   }   console.log("======================================")
//   console.log(chalk.bgYellow("Here are your new updated scores, check if your score is appended or else text us will append that"));
//   console.log("======================================")
// console.log(chalk.red(highScores));
// }

// for(var i =0 ; i<top_names.length; i++) {
      //   if(user_name.toUpperCase() === top_names[i].toUpperCase()){
      //     break
      //   }
    //     else{
          
    //     }
        
    //   }
    // }




