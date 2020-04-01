module.exports = class TextGenerator {
    constructor() {}

    continuePhrase(nextWords, phraseBeginning, wordsCount) {
        if (nextWords.length === 0) return phraseBeginning;

        let stringBuilder = [];
        let newWord1 = "";
        let newWord2 = "";
        stringBuilder.push(phraseBeginning);

        for (let i = 0; i < wordsCount; i++) {
            let lastWord = "";
            let preLastWord = "";
            let phraseBeginningSplitted = phraseBeginning.split(/\s/g);

            if (phraseBeginningSplitted.length >= 1)
                lastWord = phraseBeginningSplitted[phraseBeginningSplitted.length - 1];
            if (phraseBeginningSplitted.length >= 2)
                preLastWord = phraseBeginningSplitted[phraseBeginningSplitted.length - 2];

            if (nextWords.has(preLastWord + " " + lastWord))
                newWord2 = nextWords.get(preLastWord + " " + lastWord);
            if (nextWords.has(lastWord))
                newWord1 = nextWords.get(lastWord);

            if (phraseBeginningSplitted.length >= 2 && newWord2) {
                stringBuilder.push(" " + newWord2);
                newWord2 = "";
                newWord1 = "";
                phraseBeginning = stringBuilder.join("");
                continue;
            }
            else if (newWord1) {
                stringBuilder.push(" " + newWord1);
                newWord2 = "";
                newWord1 = "";
            }
            phraseBeginning = stringBuilder.join("");
        }

        return phraseBeginning;
    }
}