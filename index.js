const readLine = require("readline-sync");

var score = 0;

var questions = [
  {
    question: "Who is the 7th Hokage ",
    answer: "Naruto",
  },
  {
    question: "Who is the Naruto Rival ",
    answer: "Sasuke",
  },
  {
    question: "Who is the Naruto Father ",
    answer: "Minato",
  },
  {
    question: "What is the name of Pervy Sage ",
    answer: "Jiraiya",
  },
  {
    question: "What is the nae of Nine tails ",
    answer: "Kurama",
  },
];

const welcome = () => {
  const userName = readLine.question("What is your Name  ");
  console.log(
    `Welcome ${userName} Let's see if you know about Naruto universe`
  );
};

const play = (question, answer) => {
  const userAnswer = readLine.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score++;
    console.log("Right!");
  } else {
    console.log("Wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
};

const game = () => {
  for (let i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
};

const showScores = () => {
  console.log(`YaY! you Scored ${score}`);
};

welcome();
game();
showScores();
