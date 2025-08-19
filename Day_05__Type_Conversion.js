//user input is in string , for arithmetic operations we need to convert it

let age = window.prompt("How old are you");
age = Number(age);
console.log(age);


let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x)
y = String(y)
z = Boolean(z)
console.log(x, typeof x);     // Nan number
console.log(y, typeof y);     // pizza string
console.log(z, typeof z);     // true boolean


let a = "0";
let b = "0";
let c = "0";
a = Number(a)
b = String(b)
c = Boolean(c)
console.log(a, typeof a);     // 0 number
console.log(b, typeof b);     // 0 string
console.log(c, typeof c);     // true boolean


let d = "";
let e = "";
let f = "";
d = Number(d)
e = String(e)
f = Boolean(f)
console.log(d, typeof d);     // 0 number
console.log(e, typeof e);     //   string
console.log(f, typeof f);     // false boolean
//( CONVERTING EMPTY STRING TO BOOLEAN GIVES FALSE AND IT CAN BE USED TO CHECK IF A USER HAS ENTERED VALUE OR NOT )
