module.exports = class FrequencyAnalysis {
    constructor() {}

    getMostFrequentNextWords(text) {
        if (text.length === 0) return new Map();

        let frequencyDict = this.getFrequencyDictionary(text);

        //��������� ����� ��������� ����������
        let resultDict = new Map();
        for (let e of frequencyDict) {
            let curWordKey = e[0].split(":")[0];
            let curWordValue = e[0].split(":")[1];
            let strengthOfCurCombination = e[1];

            if (resultDict.has(curWordKey)) {
                //���� ������� ������� ���������� �� �/������� ����� ������� ���������� � ������� ��������� �������� ������
                if (strengthOfCurCombination === frequencyDict.get(curWordKey + ":" + resultDict.get(curWordKey))) {
                    if (curWordValue < resultDict.get(curWordKey))
                        resultDict.set(curWordKey, curWordValue);
                }
                else if (strengthOfCurCombination > frequencyDict.get(curWordKey + ":" + resultDict.get(curWordKey)))
                    resultDict.set(curWordKey, curWordValue);
            }
            else
                resultDict.set(curWordKey, curWordValue);
        }

        return resultDict;
    }

    getFrequencyDictionary(text) {
        //������� ���:
        //key === ���������� 2� � 3� ���� � ������ 1�� �����������
        //value === ������� ��� ��� ���������� ����������� �� ���� ������
        let frequencyDict = new Map();
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < text[i].length - 1; j++) {
                let key = text[i][j] + ":" + text[i][j + 1];
                if (frequencyDict.has(key))
                    frequencyDict.set(key, frequencyDict.get(key) + 1);
                else
                    frequencyDict.set(key, 0);
            }

        }

        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < text[i].length - 2; j++) {
                let key = text[i][j] + " " + text[i][j + 1] + ":" + text[i][j + 2];
                if (frequencyDict.has(key))
                    frequencyDict.set(key, frequencyDict.get(key) + 1);
                else
                    frequencyDict.set(key, 0);
            }
        }

        return frequencyDict;
    }
}