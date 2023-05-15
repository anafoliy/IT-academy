const buildWrapper = (tag) => {
    return (text) => {
        return `<${tag}>${replaceMnemo(text)}</${tag}>`;
    }
}

const replaceMnemo = (text) => {
    text = text.replaceAll(/&/g, '&amp;')
               .replaceAll(/</g, '&lt;')
               .replaceAll(/>/g, '&gt;')
               .replaceAll(/'/g, '&apos;')
               .replaceAll(/"/g, '&quot;');
    return text;
}

let wrapH1 = buildWrapper("H1");
let wrapP = buildWrapper("P");
console.log(wrapH1("СТИХИ"));
console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Вкусные M&M's"));
