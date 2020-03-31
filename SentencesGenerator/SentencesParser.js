module.exports = class SentencesParser {
    constructor() {
        this.sentences = [];
        this.wordsOfSentences = [];
    }

    parseSentences(text) {
        let temp1 = text.replace(/\n/gi, ".");
        let temp2 = temp1.replace(/mr\./gi, "mr");
        let temp3 = temp2.replace(/mrs\./gi, "mrs");
        let splittedText = temp3.split(/\.|!|\?|;|:|\(|\)/ig);

        let wordPattern = /(([a-z]|['])+)/gi;
        try {
            for (let i = 0; i < splittedText.length; i++) {
                //вычленяем все слова из текущего предложения
                let regexResult = splittedText[i].match(wordPattern);
                if (!regexResult) continue; 
                for (let e of regexResult)
                    this.wordsOfSentences.push(e.toLowerCase());
                //если слов найдено небыло ничего не добавляем
                if (this.wordsOfSentences.length !== 0) {
                    this.sentences.push(this.wordsOfSentences);
                    this.wordsOfSentences = [];
                }
            }
        }
        catch (error) {
            debugger;
        }
        return this.sentences;
    }
}