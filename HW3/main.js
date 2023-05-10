const drinkStorage = new HashStorageFunc();

function HashStorageFunc() {
    const self = this;
    // Хэш наполнил просто для примера, чтобы тестить было быстрее
    const hash = {
        "Маргарита": ["Да", "Ляля Ляля Ляля Ляля Ляля Ляля"],
        "Кровавая Мерри": ["Нет", "кек кек кек кек кек кек кек"],
        "Отвёртка": ["Да", "юху хух ух юху хух ухюху хух ухюху хух ухюху хух ух"]
    };
    self.addValue = function (key, value) {
        hash[key] = value;
    }
    self.getValue = function (key) {
        return hash[key];
    }
    self.deleteValue = function (key) {
        if (hash[key]) {
            delete hash[key];
            return true;
        }
        return false;
    }
    self.getKeys = function () {
        return Object.keys(hash);
    }
}

function inputInfo() {
    const drinkName = prompt("Введите название напитка", "Маргарита");
    const alcohol = prompt("Ваш напиток алкогольный?", "Да");
    const recipe = prompt("Напишите рецепт вашего напитка", "Рецепт");
    if (drinkName && alcohol && recipe) {
        drinkStorage.addValue(drinkName, [alcohol, recipe]);
    }
}

function getInfo() {
    const drinkName = prompt("Введите название напитка", "Маргарита");
    const [isAlco, recept] = drinkStorage.getValue(drinkName);
    try {
        alert(`напиток ${drinkName}
алкогольный: ${isAlco}
рецепт: ${recept}`)
    } catch (TypeError) {
        alert("Такого напитка в базе нет!")
    }
}

function deleteInfo() {
    const drinkName = prompt("Введите название напитка", "Маргарита");
    const message = drinkStorage.deleteValue(drinkName) 
                    ? `напиток ${drinkName} удалён!` 
                    : "Такого напитка в базе нет!";
    alert(message);
}

function getAllDrinks() {
    if (drinkStorage.getKeys().length !== 0) {
        alert(`Перечень всех напитков
${drinkStorage.getKeys()}`)
    } else {
        alert("Список пуст! Добавьте напиток!")
    }
}