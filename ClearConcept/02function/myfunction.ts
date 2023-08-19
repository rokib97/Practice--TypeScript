// declare type in function parameter
function addTwo(num: number) {
  return num + 2;
}

// string type in parameter
function getUpper(value: string) {
  return value.toUpperCase();
}

// different type in parameter
function signUpUser(name: string, email: string, isPaid: boolean) {}

// default value
function logInUser(email: string, name: string, isPaid: boolean = true) {}

// return value type
function sum(num: number): number {
  return num * num;
}

// when function return string (es6 Arrow => )
const getHello = (): string => "Hello Arrow Bhai!";

// using higher order function

let names = ["rokib", "sakib", "partho", "sakiba"];
// expicitly telling the callback function return type
names.map((name): string => {
  return `hello ${name}`;
  // return 1 // not getting executed
});

// no return from function its void type
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// never type
function hnadleError(errmsg: string): never {
  throw new Error("Something wrong...");
}

let result = sum(10);
logInUser("r@gmail.com", "rokib");
signUpUser("rokib", "rh@he.com", true);

export {};
