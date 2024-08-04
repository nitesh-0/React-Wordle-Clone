import Words from "./wordleBank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(Words)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\n").map((word) => word.trim().toLowerCase());
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr);
        console.log(wordSet)
      });
    return { wordSet, todaysWord };
  };

