type One = string;
type Two = number | string;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; //more sspecific

let d = <One>"world";
let e = <string | number>"world";

const addOrConct = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConct(2, 2, "concat") as string;
// be caeful of this its returning a string
let myVal2: number = addOrConct(2, 2, "concat") as number;

// avoid this as possible
// 10 as string;
// 10 as unknown as string;

// DOM

// const img = document.querySelector("img") as HTMLImageElement;
const img = document.querySelector("img")!;
const myImage = document.getElementById("img") as HTMLImageElement;
// or
const nextImg = <HTMLImageElement>document.getElementById("image");
// const li = document.getElementsByClassName("items");
// const li = document.getElementsByTagName("items");

img.src;
myImage.src;
nextImg.src;
