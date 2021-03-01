 var readlineSync = require('readline-sync');
 var chalk = require('chalk');
 console.log(chalk.green("welcmome to quiz on game of thrones"));
 let name = readlineSync.question("enter your name");
 console.log("welcome" +" " +chalk.bgYellow.bold(name));

 var score = 0;

 let question=[
   {
     question:"In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",

     answer:"The Battle of the Bastards",
     answer:"Battle of the Bastards"
   },
   {
     question:"Who admitted responsibility for Joffrey's death after being forced to take poison?",
     answer:"Olenna Tyrell",
     answer:"olenna tyrell"
   },
   {
     question:"What's the name of the small sword wielded by Arya Stark? And who gave it to her as a gift?",
     answer:"Needle",
     answer:"needle"
   },
   {
     question:"Who was the wildling lover of John Snow?",
     answer:"Ygritte",
     answer:"ygritte"
   },
   {
     question:"In the very first episode, who pushed Bran out of a window?",
     answer:"Jamie Lannister",
     answer:"jamie lannister"
   },
   {
     question:"What sort of steel is Ned Stark's sword, called Ice, made from?",
     answer:"Valyrian steel",
     answer:"valyrian steel"
   },
   {
     question:"Who was the eldest son and heir to King Robert Baratheon?",
     answer:"Joffrey",
     answer:"joffrey"
   },
   {
     question:"What is the nickname of Sandor Clegane?",
answer:"The Hound",
answer:"Hound",
answer:"hound"
   }
 ];

 
 function play(question, answer){
   var userAnswer=readlineSync.question(question);
   if(userAnswer==answer){
     console.log(chalk.blue("correct"));
     score=score+1;
       console.log("your score is"+" "+ chalk.bgRed(score))
   }else{
     console.log(chalk.red("wrong"));
        console.log("your score is"+" "+ chalk.bgRed(score));
   }

 }

 
for(var i=0; i<question.length;i++){

   let currentQ=question[i];
   play(currentQ.question,currentQ.answer);
 }
// score of players
let highscore ={
  rajnish:7,
  harshini:5 ,
  shivam:6 ,
  amit: 6 

}


// current high looping
let currentHigh = 7;

if(score>=currentHigh){
console.log(chalk.bgGreen.red("we have new highscore"))
}else{
  // console.log("your score is "+""+score);
}






 