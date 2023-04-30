const str = prompt("Введите строку", "параллелепипед")

function calculateVowels(string, vowels = 'аяуюоеёэиы') {
    return string
        .toLowerCase()
        .split('')
        .reduce((result, letter) => vowels.includes(letter) ? result += letter : result, '').length;
}

console.log(calculateVowels(str));





//Другие варианты, которые сразу пришли на ум

function calculateVowels1(string) {
  let count = 0;
  const arrayVowels = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
  arrayVowels.forEach(letter => {
    count += string
      .toLowerCase()
      .split('')
      .filter(element => element === letter).length;
  })
  return count;
}

function calculateVowels2(string) {
  let count = 0;
  const arrayVowels = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
  string
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if (arrayVowels.includes(letter)) {
        count++;
      }
    })
  return count;
}
