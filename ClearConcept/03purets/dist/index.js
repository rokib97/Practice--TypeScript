"use strict";
// class User {
//   public email: string;
//   name: string;
//   // #city: string = "Jaipur";
//   private city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const rokib = new User("rokib@rok.com", "rokib");
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.myCount = 5;
        this.city = "Dhaka";
    }
    get getAppleEmail() {
        return `Apple Email: ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count Should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.myCount = 4;
    }
}
const rokib = new User("rokib@rok.com", "rokib", 6969);
