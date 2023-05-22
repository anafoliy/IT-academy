class Publisher {
    constructor(items) {
        this.items = items;
    }

    printItems() {
        this.items.forEach(item => item.print());
    }

    add(item) {
        this.items.push(item);
    }
}

class Item {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    print() {
        console.log(`Title: ${this.title}. Description: ${this.description}`);
    }
}

class Article extends Item {
    constructor(title, description, author) {
        super(title, description);
        this.author = author;
    }

    print() {
        console.log(`Title: ${this.title}. Description: ${this.description}. By author: ${this.author}`);
    }
}

class News extends Item {
    constructor(title, description, source, date) {
        super(title, description);
        this.source = source;
        this.date = date;
    }

    print() {
        console.log(`Source: ${this.source}, Happened on: ${this.date}. Title: ${this.title}. Description: ${this.description}.`);
    }
}

class Course extends Item {
    constructor(title, description, expirationDate) {
        super(title, description);
        this.expirationDate = expirationDate;
    }

    #isActual() {
        return this.expirationDate >= new Date();
    }

    print() {
        if (this.#isActual()) {
            console.log(`Course: ${this.title}, will be available till ${this.expirationDate}`);
        } else {
            console.log('Not actual');
        }
    }
}

const article = new Article('Статья 1', 'Какое-то описание статьи', 'какой-то автор');
const news = new News('Новость 1', 'Какое-то описание новости', 'какой-то ресурс', '2023-05-22');
const course = new Course('Курс 1', 'Какое-то название 1-го курса', new Date('2023-12-31'));

const publisher = new Publisher([article, news, course]);
publisher.printItems();

console.log("\n------После добавления чего-то нового------\n");

const course2 = new Course('Курс 2', 'Какое-то название 2-го курса', new Date('2023-04-29'));
const course3 = new Course('Курс 3', 'Какое-то название 3-го курса', new Date('2025-04-29'));
publisher.add(course2);
publisher.add(course3);
publisher.printItems();