const text = document.querySelector(".hero-title");

const textConvertedToArray = text.textContent.split("");

let letterIndex = 0;
let junctionOfLetters = '';

text.innerText = "";

const iterationText = setInterval(() => {
  if (letterIndex < textConvertedToArray.length) {
    junctionOfLetters += textConvertedToArray[letterIndex];
    text.innerText = junctionOfLetters;
    letterIndex++;
  } else {
    clearInterval(iterationText);
  }
}, 100);

console.log(textConvertedToArray);