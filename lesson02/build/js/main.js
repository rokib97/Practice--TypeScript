"use strict";
// STRING
let myName = "rokib"; // implicite declare or infer
// myName = 10; // you can't do it
// Just declare and assign later
let myNewName; // declare
myNewName = "rokibul Hasan"; //assign value
myName = "Hasan"; //reassign string value
let firstName = "Rokib"; //explicite declare
// firstName = 120  you can't do it
firstName = "rokibul"; // reassign value
// Number Type
let myValue;
// myValue = "new value" you can't do it
myValue = 69; // assign value
let value = 10;
// Boolean
let isHappy;
isHappy = true;
let isCute = false;
// any type  => you can asgin any type of value
let anyValue;
// anyValue = 10; // valid storing number
// or
// anyValue = "my String" // valid storing string
// anyValue = true; // valid storing boolean
// let newTypeValue: any = 10;  //valid
// let MyboolType: any = false; // its also valid
// Function Parameter
// if we don't explicitely tell what the type ts make it any
// and if we say that params its number then the function also will be that type and return that type value
// let sum = (a, b) => {
//   return a + b;
// };
// now the sum also being number type
// let sum = (a: number, b: number) => {
//   return a + b;
// };
// now the sum is being string  type, also return type is string
// let sum = (a: number, b: string) => {
//   return a + b;
// };
// console.log(sum(10, "name"));
// Union Type
let newType; //we can assign number or string now
newType = "rokib"; // abosulete fine
newType = 10; //abosulete fine
// console.log(newType);
// example
let postId;
let isActive;
// when in doubt check inference
let re = /\w+/g; // not sure so check the inference by mousehover to the variable
let myRegEx = /\w+/g; //accurate now
// OverView
// number type
let myAge = 25;
let MyNewAge;
MyNewAge = 26;
// string type
let phoneName = "Samsung";
let myPhoneName;
myPhoneName = "Poco";
// Boolean type
let isSmart = true;
let isLazy;
isLazy = true;
// Any Type
let unKnown;
unKnown = "hello";
unKnown = true;
unKnown = 10;
// Union Type
let choise;
choise = 10;
choise = "ishq dawana";
let newChoise = true;
console.log(typeof newChoise);
// function parameter (any , specific, string over number preference)
// // return any type
// let fullName = (first: number, second: any) => {
//   return first + second;
// };
// return string type
// let fullName = (first: number, second: string) => {
//   return first + second;
// };
// string return type
let fullName = (first, second) => {
    return first + second;
};
// when in doubts , check inference
let MyRegEx = /\+g/;
let MyRegExample = /\+g/;
