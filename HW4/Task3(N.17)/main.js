class HashStorageClass {
    constructor(){
        this.hash = {
            "Маргарита": ["Да", "Ляля Ляля Ляля Ляля Ляля Ляля"],
            "Кровавая Мерри": ["Нет", "кек кек кек кек кек кек кек"],
            "Отвёртка": ["Да", "юху хух ух юху хух ухюху хух ухюху хух ухюху хух ух"]
        };
    }

    addValue(key, value) {
        this.hash[key] = value;
    }
    getValue(key) {
        return this.hash[key];
    }
    deleteValue(key) {
        if (this.hash[key]) {
            delete this.hash[key];
            return true;
        }
        return false;
    }
    getKeys() {
        return Object.keys(this.hash);
    }
}

const drinkStorage = new HashStorageClass();

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
    try {
        const [isAlco, recept] = drinkStorage.getValue(drinkName);
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
    const listOfDrinks = drinkStorage.getKeys();
    const message = listOfDrinks.length !== 0
        ? `Перечень всех напитков\n${listOfDrinks}`
        : "Список пуст! Добавьте напиток!";
    alert(message);
}