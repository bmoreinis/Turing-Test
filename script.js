/* CPU Talk */
// ; = "semicolon"

/* Initializations */
var trigger = "quit";
var answer = ""; 
var cpuTalk = ["hi","yes","no","How are you?","lets play a game!","Rainy day today.","whats your name","I have a joke.  Want to hear it?","Do I have a cicada on my back?","How is your day going?","Want to listen to music","whats your favorite movie","S'up!","Hey","What\'s your favorite movie?","Looking forward to summer?","Are shadows made of matter?","What\'s your favorite book?","What\'s your favorite color?","What\'s your favorite ice cream flavor?","What\'s your favorite animal?","What\'s you favorite cereal?", "What grade are you in?"];
var userTalk = ["favorite movie","grade", "how are you?"];
var promptInt = 0;
var cpuSay = cpuTalk[promptInt];

while(answer != trigger){
  answer = prompt(cpuSay);
  stringCheck = stringChecker(answer.toLowerCase());
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

function cpuThink(answer){
  var response = "You don\'t say!";
  if (answer == "favorite movie") {
     response = "Avengers Endgame";
  }
  else if (answer == "grade"){
    response = "I\'m not in school anymore.";
  }
  else if (answer == "how are you?") {
    response = queTal();
  }
  return response; 
}

function queTal(){
  var posibilidades = ["Bien aqui volando a la luna!","Bien, estoy buscando hormigas para mi coleccion.","Bien, buscando hormigas para comer."];
  hoy = Math.floor(Math.random()*posibilidades.length);
  return posibilidades[hoy];
}