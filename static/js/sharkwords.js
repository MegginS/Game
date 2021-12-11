const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

//const numWrong = 0;
let numWrong=0, correctGuesses=0;

// Loop over the chars in `word` and create divs.xww
//
const createDivsForChars = word => {
  // How to append an HTML string to another element using the insertAdjacentHTML method:
  // document.querySelector('body').insertAdjacentHTML('beforeend', '<p>Hi</p>');
  // EX: createDivsForChars=e=>{const t=document.querySelector("#word-container");
  // for(const n of e)t.insertAdjacentHTML("beforeend",`<div class="letter-box ${n}"></div>`)},
  const t=document.querySelector("#word-container");
  for(const n of word)t.insertAdjacentHTML("beforeend",`<div class="letter-box ${n}"></div>`)
};

// Loop over each letter in the alphabet and generate a button
// for each letter
const generateLetterButtons = () => {
  // generateLetterButtons=()=>{const e=document.querySelector("#letter-buttons");
  //for(const t of ALPHABET)e.insertAdjacentHTML("beforeend",`<button>${t}</button>`)},
  //
  // {const e=document.querySelector("#letter-buttons");
  // for(const t of ALPHABET)e.insertAdjacentHTML("beforeend",`<button>${t}</button>`)},
  const e=document.querySelector("#letter-buttons");
  for(const t of ALPHABET)e.insertAdjacentHTML("beforeend",`<button>${t}</button>`)
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = buttonEl => {
  // disableLetterButton=e=>{e.disabled=!0}
  buttonEl.disabled=!0
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = letter => {
  // isLetterInWord=e=>null!==document.querySelector(`div.${e}`),
  //
  null!==document.querySelector(`div.${letter}`)
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hellohellohello';

  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call
  createDivsForChars(word)

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call
  generateLetterButtons()

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
