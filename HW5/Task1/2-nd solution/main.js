exports.greetingModule = (function () {
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