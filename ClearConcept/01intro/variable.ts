let greetings: string = "Hello World";
greetings.toUpperCase();

console.log(greetings);

// number
let userId: number = 334466;
userId.toFixed(2); // only number methods can be accessed

// boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// we don't need to use type when ts doing inference itelf

// any keyword
let hero: string; // we need to declare the type because we returning a string , and skip any time as you can
function getHero() {
  return "thor";
}

hero = getHero();

export {};
