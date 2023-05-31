let greeting = 'Hello';
let name = '';
exports.greetingModule = {
    setName: function (newName) {
        name = newName;
    },
    sayGreeting: function () {
        return greeting + " " + name;
    }
};