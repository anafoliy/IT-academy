let greetingModule = (function () {
    const greeting = 'Hello';
    let name = '';
    return {
        setName: function (newName) {
            name = newName;
        },
        sayGreeting: function () {
            return greeting + " " + name;
        }
    }
})();

greetingModule.setName('Anatoli');
console.log(greetingModule.sayGreeting());