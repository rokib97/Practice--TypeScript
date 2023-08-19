let user: [string, number, boolean] = ["name", 120, true];
let rgb: [number, number, number] = [525, 120, 255];

type NewUser = [string, number];

const MyUser: NewUser = ["name", 120];
// ovevrride
MyUser[0] = "newname";

MyUser.push("rokib"); // i can push element any type data
