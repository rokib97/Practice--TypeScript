class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello ${this.age}`;
  }
}

const rokib = new Coder("rokib", "rock", 25);
// console.log(rokib.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `i write ${this.lang}`;
  }
}

const sara = new WebDev("mac", "sara", 25, "pop");
// console.log(sara.getLang());

// interface in class

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guiatist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guiatist("jimmy", "guiter");
// console.log(page.play("stroms"));

// Static Class Member
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const hasan = new Peeps("rokib");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
// console.log(Peeps.count);
console.log(Amy.id);

// getter ans setter
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Params is not an array of String");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Younf", "Inna Habibi"];
MyBands.data = [...MyBands.data, "ZZZ TAF"];
console.log(MyBands.data);
