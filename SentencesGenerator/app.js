'use strict';
let fs = require("fs");
let SentencesParser = require("./SentencesParser");

let text = fs.readFileSync("./Texts/test.txt", "utf8");

let sp = new SentencesParser();
let sentences = sp.parseSentences(text);
//for (let i = 0; i < sentences.length; i++) {
//    console.log(sentences[i].reduce((sumStr, curStr) => sumStr + " " + curStr));
//}

console.log('Hello world');
