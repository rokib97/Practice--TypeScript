"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declare type in function parameter
function addTwo(num) {
    return num + 2;
}
// string type in parameter
function getUpper(value) {
    return value.toUpperCase();
}
// different type in parameter
function signUpUser(name, email, isPaid) { }
// default value
function logInUser(email, name, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
logInUser("r@gmail.com", "rokib");
signUpUser("rokib", "rh@he.com", true);
