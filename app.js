const btn = document.querySelector('.btn');
const guess = document.querySelector('input');
const msg = document.querySelector('.msg');
let newWords = "";
let randWords = "";
let play = false;
let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql', 'bootstrap'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempWords = sWords[ranNum];
    return newTempWords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', () => {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randWords}`;
    } else {
        let tempWord = guess.value;
        if (newWords === tempWord) {
            // console.log("correct");
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = "Start Again!";
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `Sorry! Boss <br> It's not Correct.plz try again ${newWords}`;
            guess.value = "";
        }
    }
});