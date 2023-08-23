"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello ${this.age}`;
    }
}
const rokib = new Coder("rokib", "rock", 25);
// console.log(rokib.getAge());
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const sara = new WebDev("mac", "sara", 25, "pop");
class Guiatist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guiatist("jimmy", "guiter");
// console.log(page.play("stroms"));
// Static Class Member
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const hasan = new Peeps("rokib");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
// console.log(Peeps.count);
console.log(Amy.id);
// getter ans setter
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Params is not an array of String");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Younf", "Inna Habibi"];
MyBands.data = [...MyBands.data, "ZZZ TAF"];
console.log(MyBands.data);
