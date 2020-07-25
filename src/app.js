'use strict';
let fs = require("fs");
let SentencesParser = require("./SentencesParser");
let FrequencyAnalysis = require("./FrequencyAnalysis");
let TextGenerator = require("./TextGenerator");

let text = fs.readFileSync("./Texts/HarryPotterText.txt", "utf8");

let sp = new SentencesParser();
let sentences = sp.parseSentences(text);
//for (let i = 0; i < sentences.length; i++) {
//    console.log(sentences[i].reduce((sumStr, curStr) => sumStr + " " + curStr));
//}

let fa = new FrequencyAnalysis();
let frequency = fa.getMostFrequentNextWords(sentences);

let tg = new TextGenerator();
let stdin = process.openStdin();
let enteredStr = "";
console.log("Enter first word(s): ");
stdin.addListener("data", function (d) {
    enteredStr = d.toString().trim();
    if (enteredStr === "cls") {
        console.clear();
        return;
    }

    console.log("you entered: [" +
        d.toString().trim() + "]");

    if (!(enteredStr.replace(/\s+/g, ''))) return;
    let phrase = tg.continuePhrase(frequency, enteredStr.toLowerCase(), 10);
    console.log(phrase);
});
