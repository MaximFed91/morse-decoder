const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const words = expr.split('**********');
    words.forEach((item, i) => {
        const arr = [],
            word = [];
        for (let i = 0; i < item.length; i += 10) {
            arr.push(item.slice(i, i + 10));
        }
        arr.forEach((item, i) => {
            let strMorz = '';
            for (let i = 0; i < item.length; i += 2) {
                if (item.slice(i, i + 2) === '10') {
                    strMorz += '.';
                }
                if (item.slice(i, i + 2) === '11') {
                    strMorz += '-';
                }
            }
            for (let key in MORSE_TABLE) {
                if (key == strMorz) {
                    word[i] = MORSE_TABLE[key];
                }
            }
        });
        words[i] = word.join('');
    });
    return words.join(' ');
}

module.exports = {
    decode
}