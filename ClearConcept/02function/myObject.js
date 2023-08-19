"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "rokib",
    age: 25,
    email: "a@b.com",
    isActive: true,
};
// params type declare
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "rokib", isPaid: true });
// returb type also a object
function createCourse() {
    return { name: "react js", price: 999 };
}
createCourse();
function createUserUsingAliases(u) {
    return { name: "", email: "", isActive: true };
}
createUserUsingAliases({ name: "", email: "", isActive: true });
var myUser = {
    _id: "152461",
    name: "rokib",
    email: "a@b.com",
    isACtibve: true,
};
var cardDetails = {
    cardNumber: "1451asxxxxx",
    cardDate: "15-15-1998",
    eev: "adsasdasd1451asxxxxx",
};
console.log(cardDetails.cardDate);
