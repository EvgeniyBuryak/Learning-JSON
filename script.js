let user = {
    name: "Jhon",
    age: 25,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
    wife: null,

    toString() { // этот метод JSON игнорирует
        return `{name: "${this.name}", age: ${this.age}}`;
    },
}

let json = JSON.stringify(user); // преобразует простые объекты, массивы, примитивы - строки, числа, boolean и null

//alert(typeof json); // string

alert(json);

let outJson = JSON.parse(json);

alert(user.toString());
alert(outJson.toString()); //метода toString() нету, значит не срабатывает

// second example
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Андрей" }, { name: "Петров" }],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, (key, value) => {

    /**
     * Избавляемся от цикличных ссылок
     * */
    if (key == "occupiedBy" || key == "self") {
        /**
         * если value массив, пропускаем
         * иначе, когда объект возвращаем undefined
         * */
        if ( !(Array.isArray(value)) ) { 
            return undefined;
        }
    }
    return value;
}, 2)); // отступ "space", для удобной читаемости