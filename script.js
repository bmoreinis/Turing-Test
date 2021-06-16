/* CPU Talk */
// ; = "semicolon"

/* Initializations */
// for RPS
var choice = 0,cpuScore = 0, myScore = 0;
var trigger = "quit";
var answer = ""; 
var cpuTalk = ["hi","yes","no","How are you?","lets play a game!","Rainy day today.","whats your name","I have a joke.  Want to hear it?","Do I have a cicada on my back?","How is your day going?","Want to listen to music","whats your favorite movie","S'up!","Hey","What\'s your favorite movie?","Looking forward to summer?","Are shadows made of matter?","What\'s your favorite book?","What\'s your favorite color?","What\'s your favorite ice cream flavor?","What\'s your favorite animal?","What\'s you favorite cereal?", "What grade are you in?","Knock knock!","It\'s the end of the year!","RPS"];
var userTalk = ["test knock","favorite movie","favorite color","grade", "how are you","mine is", "knock knock","rps"];
var promptInt = 0;
var cpuSay = cpuTalk[promptInt];

while(answer != trigger){
  if(cpuSay=="Knock knock!") {
      answer = knockKnockCPU();
    }
  else if (cpuSay =="RPS"){
      answer = rps();
  }
  else answer = prompt(cpuSay);
  let stringCheck = stringChecker(answer.toLowerCase());
  if (answer == trigger) {
    alert("Nice talkin' to ya!");
  }
  else if (stringCheck >= 0){
    cpuSay = cpuThink(userTalk[stringCheck]);
  }
  else {
    promptInt = Math.floor(Math.random()*cpuTalk.length);
    cpuSay=cpuTalk[promptInt];
  }
}

function stringChecker(answer){
  let responseIndex = -1;
  // go through each of the userTalk test phrases
  for (let test = 0; test<userTalk.length;test++){
    // check if the phrase is in the answer
    if (answer.includes(userTalk[test])){
      // what is the index of the userTalk phase?
      responseIndex = userTalk.indexOf(userTalk[test]);
    }
  }
  return responseIndex;
}

function cpuThink(answerPart){
  var response = "You don\'t say!";
  if (answerPart == "favorite movie") {
     response = "Avengers Endgame";
  }
  else if (answerPart == "knock knock"){
     response = knockKnock();
  }
  else if (answerPart == "favorite color") {
     response = "purple";
  }
  else if (answerPart == "mine is"){
    response = lastPhrase(answer, "mine is");
  }
  else if (answerPart == "grade"){
    response = "I\'m not in school anymore.";
  }
  else if (answerPart == "how are you") {
    response = queTal();
  }
  else if (answerPart == "test knock") {
    response = "Knock knock!";
  }
  else if (answerPart == "rps"){
    response = rps();
  }
  return response; 
}

function queTal(){
  var posibilidades = ["Bien aqui volando a la luna!","Bien, estoy buscando hormigas para mi coleccion.","Bien, buscando hormigas para comer."];
  let hoy = Math.floor(Math.random()*posibilidades.length);
  return posibilidades[hoy];
}

function lastPhrase(answer,whatThing){
  let cutHowMany = whatThing.split(" ").length;
  let answerArray = answer.split(" ");
  let response = answerArray.slice(cutHowMany);
  return response.join(" ")+" is one of my faves, too!";
}

function knockKnock(){
  answer = prompt("Who's there?");
  answer = prompt(answer + " who?");
  answer = prompt(answer + "... that\'s so funny! ha ha ha!!!!");
  return answer;
}

function knockKnockCPU(){
  answer = prompt("Knock knock!");
  answer = answer.toLowerCase();
  if (answer.substr(0,3) == "who") {
    answer = prompt("Tank!");
    answer = answer.toLowerCase();
    if (answer.substr(0,3) == "tan") {
      answer = prompt("You're welcome!");
    }
    else {
      answer = prompt("You were supposed to say \'Tank who?");
    }
  }
  else {
    answer = prompt("You were supposed to say \'Who\'s there? \'!");
  }
  return answer;
} 

/* Rock Paper Scissors */

function rps(){
  while(choice!="q"){
    rpsFair();
    alert("Score: Player Score: "+myScore+", Cpu Score: "+cpuScore);
  }
  return("Fun playing with you!");
}

function rpsFair(){
  choice = prompt("Let's Play RPS! Enter r, p, or s. Enter q to stop");
  cpu = Math.floor(Math.random()*3)+1;
  if((choice!="r") && (choice!="p") && (choice!="s") && (choice!="q")){
    alert("Enter r, p, or s, or q to end.");
  }
  if(choice=="r"){
    choice = 1;
  } else {
    if(choice=="p"){
      choice = 2;
    } else {
      if(choice=="s"){
        choice = 3;
      }
    }
  }
  if(choice==cpu){
    alert("Tie, try again!");
  } else {
    if((choice==1) && (cpu==2)){
      // If Choice = Rock and Cpu = Paper
      alert("I chose Paper, I Win!");
      cpuScore++;
    } else {
      if((choice==3) && (cpu==1)){
        // If Choice = Scissors and Cpu = Rock
        alert("I chose Rock, I Win!");
        cpuScore++;
      } else {
        if((choice==2) && (cpu==3)){
          // If Choice = Paper and Cpu = Scissors
          alert("I chose Scissors, I Win!");
          cpuScore++;
        } else {
          if((choice==2) && (cpu==1)){
            // If Choice = Paper and Cpu = Rock
            alert("You chose Paper, You Win!");
            myScore++;
          } else {
            if((choice==1) && (cpu==3)){
              // If Choice = Rock and Cpu = Scissors
              alert("You chose Rock, You Win!");
              myScore++;
            } else {
              if((choice==3) && (cpu==2)){
                // If Choice = Scissors and Cpu = Paper
                alert("You chose Scissors, You Win!");
                myScore++;
              }
            }
          }
        }
      }
    }
  } 
}