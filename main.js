document.addEventListener("DOMContentLoaded", function() {

const randomWords = ["zebra", "umbrella", "jazz", "kangaroo", "xylophone", "quasar", "flamingo", "volcano", "quokka", "ninja", "whiskey", "xylophone", "zombie", "penguin", "ostrich", "jigsaw", "koala", "whale", "unicorn", "rhubarb", "sphinx", "chocolate", "muffin", "tornado", "robot", "penguin", "galaxy", "parachute", "helicopter", "quicksilver", "butterfly", "dinosaur", "lightning", "hurricane", "bicycle", "narwhal", "octopus", "dragon", "snail", "meteor", "whirlwind", "goblin", "jellyfish", "toothpaste", "giraffe", "fireworks", "rainbow", "lollipop", "moonwalk"];
let randomNumber = Math.floor(Math.random() * randomWords.length) + 1;
const button = document.getElementById("btn");
const label = document.getElementById("txt");
const input = document.getElementById("input");
const para = document.createElement("p");


input.focus();
label.textContent = randomWords[randomNumber];
let labelValue = label.textContent;
let inputValue = input.value;

console.log("label text: " + labelValue);
console.log("input tex: " + inputValue);

button.addEventListener("click", CompareText);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    CompareText();
  }
});

function CompareText() {
  inputValue = input.value;
    console.log("label text: " + labelValue);
    console.log("input tex: " + inputValue);
  if (labelValue === inputValue){
    correct.style.display = "block";
    incorrect.style.display = "none";
  para.textContent = "Correct!";
  input.value = "";
} else {
  incorrect.style.display = "block";
  correct.style.display = "none";
  para.textContent = "Incorrect";
  input.value = "";
}
randomNumber = Math.floor(Math.random() * randomWords.length - 1) + 1;
console.log("random number: " + randomNumber);
  label.textContent = randomWords[randomNumber];
  labelValue = label.textContent;
    
document.body.appendChild(para);}
});