const firstName = prompt("Введите имя:", "Анатолий");
const weight = input("Введите ваш вес:", "75");
const height = input("Введите ваш рост(в метрах):", "1.75");

const humanWeightIndex = calculateHumanWeightIndex(weight, height);
print(firstName, humanWeightIndex, getBodyIndexInformation(humanWeightIndex));

function input(text, placeholder) {
    let msg;
    do {
        msg = prompt(text, placeholder);
        if (msg.trim() && !isNaN(msg) && msg > 0) {
            return msg;
        }
    } while (!msg.trim() || isNaN(msg) || msg < 0);
}

function calculateHumanWeightIndex(weight, height) {
    return (weight / Math.pow(height, 2)).toFixed(1);
}

function getBodyIndexInformation(humanWeightIndex) {
    let information;
    if (humanWeightIndex <= 16.5) {
        information = "Крайний недостаток веса";
    } else if (humanWeightIndex <= 18.4) {
        information = "Недостаток в весе";
    } else if (humanWeightIndex <= 24.9) {
        information = "Нормальный вес тела";
    } else if (humanWeightIndex <= 30) {
        information = "Избыточная масса тела";
    } else {
        information = "Пора худеть! :D";
    }
    return information;
}

function print(firstName, humanWeightIndex, bodyIndexInformation) {
    alert(`${firstName}: ваш ИМТ - ${humanWeightIndex}
Результат: ${bodyIndexInformation}
Cпасибо, что воспользовались нашим сервисом!`);
}