exports.greetingModule = {
    greeting: 'Hello',
    name: '',
    setName: function (newName) {
        this.name = newName;
    },
    sayGreeting: function () {
        return this.greeting + " " + this.name;
    }
};