const buildWrapper = (tag) => {
    return (text) => {
        return `<${tag}>${replaceMnemo(text)}</${tag}>`;
    }
}

// const mnemonica = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&apos;'
// }

const replaceMnemo = (text) => {
    // Object.keys(mnemonica).forEach(element => {
    //     text = text.replaceAll(element, mnemonica[element])
    // });
    text = text.replaceAll(/&/g, '&amp;')
               .replaceAll(/</g, '&lt;')
               .replaceAll(/>/g, '&gt;')
               .replaceAll(/'/g, '&apos;')
               .replaceAll(/"/g, '&quot;');
    return text;
}

let wrapH1 = buildWrapper("H1"); // строим функцию для оборачивания текста в тег H1
let wrapP = buildWrapper("P");   // строим функцию для оборачивания текста в тег P
console.log(wrapH1("СТИХИ"));
// в консоль выводится строка "<H1>СТИХИ</H1>"
console.log(wrapP("Однажды в студёную зимнюю пору"));
// в консоль выводится строка "<P>Однажды в студёную зимнюю пору</P>"
//Функция должна учитывать, что некоторые символы надо замеменять на HTML - мнемоники(а именно - символы < > ' " &):
console.log(wrapP("Вкусные M&M's"));
// в консоль выводится строка "<P>Вкусные M&amp;M&apos;s</P>"
