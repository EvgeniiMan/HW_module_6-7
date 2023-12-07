let word = "Арбуз у зубра ";
let checkWord = word.toLowerCase().replaceAll(' ', '');
let isPalindrom = false

for(let i = 0, j = checkWord.length -1; i < checkWord.length / 2; i++) {
    if (checkWord[i] === checkWord[j]) {
        j--;
    } else {
        isPalindrom = false;
        break;
    }
    isPalindrom = true
}

if (isPalindrom) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
}
