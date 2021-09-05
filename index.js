const readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
var scorer = 0;


const MyAllQuestions = [
  {
    question:" 1. What is my name ? ",
    answer:"pranit",
    hint:"No hint for this question,You should know my name 😥 "
   },
   {
    question:" 2. What is my age ? ",
    answer:"20",
    hint:" Options:- 21 or 22 or 20 "
  },
  {
    question:" 3. Whare do I live ? ",
    answer:"nagpur",
    hint: " Options:- Nagpur  or Pune or Mumbai "
  },
    {
    question:" 4. What is my birthday month ? ",
    answer:"December",
    hint:" Options:- Options:- December or May or March "
  },
  {
    question:" 5. What is my github username ? ",
    answer:"pranitcode",
    hint:" Options:- pranitcode or pranitgithub "
  },
  {
    question: " 6. Who is my fav cricket player ",
    answer:"klrahul",
    hint:" Options:- Rohit or Virat or KlRahul "
  }
]
var listlength =  MyAllQuestions.length;

const HighestScore = [
  {
    name:"yachika",
    score: "6"
  }, 
]


 function LoopforQuetions(listlength) {
  for(i=0; i<listlength;i++) {
  var que = MyAllQuestions[i].question
  var ans = MyAllQuestions[i].answer
  var hin = MyAllQuestions[i].hint
  AnswerCheck(que,ans,hin) 
 }
}


function AnswerCheck(que,ans,hin) {
  var QuesKaAns = readlineSync.question(que + chalk.blue(hin));
  if(QuesKaAns.toLowerCase()===ans.toLowerCase()) {
    log(chalk.green("you are right ✔"));
    console.log("..........................")
    scorer++;
  
  } else {
    log(chalk.red("wrong ❌"))
      console.log("..........................")
  }
};

function Start() {
    var userName = readlineSync.question("What is your good Name ");
    console.log(`welcome ${userName}`)
  }

function ShowScor(scorer,HighestScore) {
  log(chalk.yellow(`your score ${scorer}`))
  
HighestScore.map(user =>Number(user.score) === Number(scorer) ? console.log(`yay😅😆,your score also same as  ${user.name} : ${user.score} , Now take a screenshot and send me `) : console.log(`Highest Score:- ${user.name} = ${user.score}`)
 ); 
};


Start();
LoopforQuetions(listlength);
ShowScor(scorer,HighestScore);
