const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false
let newWords = "";
let randWords = "";
let sWords = ["Python", "Java", "JavaScript", "PHP", "React", "ReactNative", "Flutter", "Anguler", "MongoDB"];
const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    // console.log(ranNum);
    let newTampSwords = sWords[ranNum];
    // console.log(newTampSwords.split(""));
    return newTampSwords;

}

const scrambleWords = (arr) => {
for (let i = arr.length-1; i>0; i--) {
  let temp = arr[i];
//   console.log(temp);
  let j = Math.floor(Math.random() * (i+1));
//   console.log(i);
//   console.log(j);
arr[i] = arr[j];
arr[j] = temp;  

}

return arr;

}

btn.addEventListener("click", function(){
  if (!play) {
      play = true;
      btn.innerHTML = "Guess";
      guess.classList.toggle("hidden");
      newWords = createNewWords();
      randWords = scrambleWords(newWords.split("")).join("");
      msg.innerHTML = `Guess The Word: ${randWords}`;

  }else {
      let tempWord = guess.value;
      if (tempWord === newWords) {
        play = false;  
        msg.innerHTML = `Awosome its correct it is ${newWords}`
        btn.innerHTML = "Start Again";
        guess.classList.toggle("hidden");
        guess.value = "";
      }else {
          msg.innerHTML = `Sorry sir its incorrect. plz try again ${randWords}`;
      }
  }
})