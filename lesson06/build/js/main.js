"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; //more sspecific
let d = "world";
let e = "world";
const addOrConct = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConct(2, 2, "concat");
// be caeful of this its returning a string
let myVal2 = addOrConct(2, 2, "concat");
// avoid this as possible
// 10 as string;
// 10 as unknown as string;
// DOM
// const img = document.querySelector("img") as HTMLImageElement;
const img = document.querySelector("img");
const myImage = document.getElementById("img");
// or
const nextImg = document.getElementById("image");
// const li = document.getElementsByClassName("items");
// const li = document.getElementsByTagName("items");
img.src;
myImage.src;
nextImg.src;
