"use strict";
// Array type Inference
let firstArr = ["rokib", "sakib", "hasan"]; // string type
let secondArr = ["rokib", "sakib", 1050]; // any type
let thirdArr = ["rokib", 100, true]; // any type
// Array Assignments
// firstArr[0] = 10 // can't because it accepts only string
firstArr[0] = "tania"; //its okay
firstArr.push("tani"); // on;y accepts string type data
secondArr[0] = "new string"; //accepts becuse its union type
secondArr.push(100); // also accepts because its accpets string | number
// secondArr.push(false) // not accepting
thirdArr.push(true); // its accept because inside the array there are three type string , number , and boolean
thirdArr.unshift("David");
thirdArr.push(500);
// firstArr = secondArr // not possible becuase first array expecting all string where second array does have string and number
secondArr = firstArr; // accepted because first array except string or number , which second araay have which is string
thirdArr = firstArr; // ok
thirdArr = secondArr; // ok
// secondArr = thirdArr //not okay becuse third array have boolean but second array only accept string or number
// Empty arrya is any type
let MyArr = []; //any type
MyArr.push(100);
MyArr.push("Hello");
MyArr.push(true);
let NewArrAgain = []; //explicit assignment
NewArrAgain.push("Dina"); // accept
// NewArrAgain.push(100); // not accept
// Tupples in TypeScript
// fixed length and fixed the value
// here inside the typle i am telling that only string , number and boolean accpets also the order matters
let myTuple = ["rokib", 100, true];
myTuple[0] = "hasan"; // accepted
// myTuple[0] = 1000; // not accepted its expecting string
myTuple.push(10); //accepted
myTuple.unshift("name"); //accepted
let mixed = ["hasan", 500, false]; // union type
mixed = myTuple; //accepts becuse  length is equal and mixed expecting string number or boolean which present in the Tuple
let anotherMixed = [true, 100, "name", undefined, null]; // the order default string | number | boolean | null | undefied
anotherMixed = myTuple; // its also acceptable
let myAnotherTuple = [1000, true, "rakib"];
anotherMixed = myAnotherTuple; // also accepted
// union doesn't maintain the element data type  order but Tuples does
// myAnotherTuple = anotherMixed // not accepted
// OBJECT Type
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = secondArr;
myObj = myTuple;
myObj = {};
const myExampleObj = {
    name: "rokib",
    age: 25,
    isActive: true,
};
// myExampleObj.name = 100 // not accepted its expecting string
myExampleObj.name = "hasan"; // its fine
myExampleObj.isActive = false; // accepted as its boolean data
// Object TYpe Annotation
// inline type annotation
const newObj = {
    name: "rokib",
    age: 25,
    isHandsome: false,
};
const person = {
    name: "rokib",
    isActive: true,
    monthYear: [1998, "December"],
};
let person2 = {
    name: "hasan",
    age: 26,
    isActive: false,
    monthYear: [1998, "December"],
};
const person3 = {
    name: "roqkeib",
    age: 27,
    isActive: true,
    monthYear: ["January", "December"],
};
person2 = person3; // accepted but however if we don't provide the type Person in the person3 object it won't accept the assignment
let Rahim = {
    name: "Rahim",
    age: 25,
    isPro: false,
};
// we can also remove the age as its optional . (number | undefined) type data
// no issue running this code
let Karim = {
    age: 26,
    isPro: false,
};
// object type inside function
function greetCoder(name) {
    // using optional
    //   return `Hello ${name.name?.toUpperCase()}!`;
    // or doing narrowing
    if (name.name) {
        return `Hello ${name.name.toUpperCase()}!`;
    }
    else {
        return "Hello!";
    }
}
// console.log(greetCoder(Karim));
// Enums
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
let favColor = Color.RED;
let perSon = {
    name: 10,
    active: true,
    album: ["new", 10, "more"],
};
// Literal Types
let myName;
// myName = "rokib";
let userName;
userName = "Rokib";
// functions
// basic fucntion
function addTwoNum(a, b) {
    return a + b;
}
// function without return
const msgHello = (msg) => {
    console.log(msg);
};
msgHello("Hello!");
msgHello(addTwoNum(5, 7));
// function keyword
let subs = function (c, d) {
    return c - d;
};
// alternative but we should use only in the class syntax
// interface mathFunction {
//   (a: number, b: number): number;
// }
let myFun = (a, b) => a * b;
const myFun2 = function (a, b) {
    return a * b;
};
// optional prameters
let addAll = (a, b, c) => {
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default Parameter
let sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
sumAll(10, 2);
sumAll(undefined, 10);
// rest params
let total = (a, ...nums) => {
    return nums.reduce((pre, next) => pre + next);
};
console.log(total(1, 2, 3, 4, 10));
// never type
const createError = (msg) => {
    throw new Error(msg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("Something Went Wrong");
};
