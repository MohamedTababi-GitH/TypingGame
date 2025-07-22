document.addEventListener("DOMContentLoaded", function() {

const randomWords = ["zebra", "umbrella", "jazz", "kangaroo", "xylophone", "quasar", "flamingo", "volcano", "quokka", "ninja", "whiskey", "xylophone", "zombie", "penguin", "ostrich", "jigsaw", "koala", "whale", "unicorn", "rhubarb", "sphinx", "chocolate", "muffin", "tornado", "robot", "penguin", "galaxy", "parachute", "helicopter", "quicksilver", "butterfly", "dinosaur", "lightning", "hurricane", "bicycle", "narwhal", "octopus", "dragon", "snail", "meteor", "whirlwind", "goblin", "jellyfish", "toothpaste", "giraffe", "fireworks", "rainbow", "lollipop", "moonwalk"];
let randomNumber = Math.floor(Math.random() * randomWords.length) + 1;
const button = document.getElementById("btn");
const label = document.getElementById("txt");
const input = document.getElementById("input");
const para = document.createElement("p");
const scorePara = document.createElement("p");
const audioCorrect = document.getElementById("correctSound");
const audioIncorrect = document.getElementById("incorrectSound");
let score = 0;

scorePara.textContent = "score: " + score;
input.focus();




label.textContent = randomWords[randomNumber];
let labelValue = label.textContent;
let inputValue = input.value;


input.addEventListener('input', function(){
  if (input.value.length === labelValue.length){
    CompareText2();
  }
});

function CompareText2() {
  console.log("im here");
  inputValue = input.value;

  if (labelValue === inputValue){
    audioCorrect.play();
    score++
    correct.style.display = "block";
    incorrect.style.display = "none";
    scorePara.textContent = "score: " + score;
  para.textContent = "Correct!";
  input.value = "";
  randomNumber = Math.floor(Math.random() * randomWords.length - 1) + 1;
console.log("random number: " + randomNumber);
  label.textContent = randomWords[randomNumber];
  labelValue = label.textContent
} else {
  audioIncorrect.play();
  incorrect.style.display = "block";
  correct.style.display = "none";
  para.textContent = "Incorrect";
}
;
document.body.appendChild(para);
document.body.appendChild(scorePara);
}


});
