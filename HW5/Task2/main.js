class Publisher {
    constructor(items) {
        this.items = items;
    }

    printItems() {
        this.items.forEach(item => console.log(item.print()));
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
        return `Title: ${this.title}. Description: ${this.description}.`;
    }
}

class Article extends Item {
    constructor(title, description, author) {
        super(title, description);
        this.author = author;
    }

    print() {
        return `${super.print()} By author: ${this.author}`;
    }
}

class News extends Item {
    constructor(title, description, source, date) {
        super(title, description);
        this.source = source;
        this.date = date;
    }

    print() {
        return `Source: ${this.source}, Happened on: ${this.date}. ${super.print()}`;
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
            return `Course: ${this.title}, will be available till ${this.expirationDate}`;
        } else {
            return 'Not actual';
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

const news2 = new News('Новость 2', 'Какое-то описание 2-ой новости', 'какой-то ресурс', '2023-05-22');
const course3 = new Course('Курс 3', 'Какое-то название 3-го курса', new Date('2025-04-29'));
publisher.add(course2);
publisher.add(news2);
publisher.add(course3);

publisher.printItems();