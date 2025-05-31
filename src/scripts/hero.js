const text = document.querySelector(".hero-title");
const text2 = document.querySelector(".hero-description");

const textConvertedToArray = text.textContent.split("");
const text2ConvertedToArray = text2.textContent.split("");

let letterIndex = 0;
let letterIndex2 = 0;

let junctionOfLetters = '';
let junctionOfLetters2 = '';

text.innerText = "";
text2.innerText = "";

const animateText = (element, arr, intervalTime, callback) => {
  let index = 0;
  let junction = '';

  const interval = setInterval(() => {
    if(index < arr.length) {
      junction += arr[index];
      element.innerText = junction;
      index++;
    } else {
      clearInterval(interval);
      if (callback) callback();  
    }
  }, intervalTime); 
};


animateText(text, textConvertedToArray, 100, () => {
  animateText(text2, text2ConvertedToArray, 30);
});

