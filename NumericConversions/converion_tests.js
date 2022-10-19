// Description: This script tests various numeric 
//              conversion techniques
// Author: Willian A

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

var a1 = parseInt(a);
var b1 = parseInt(b);
var c1 = parseInt(c);
var d1 = parseInt(d);

console.log(a1, b1, c1, d1);

var a2 = parseFloat(a);
var b2 = parseFloat(b);
var c2 = parseFloat(c);
var d2 = parseFloat(d);

console.log(a2, b2, c2, d2);

var a3 = Number(a);
var b3 = Number(b);
var c3 = Number(c);
var d3 = Number(d);

console.log(a3, b3, c3, d3);

var a4 = +a;
var b4 = +b;
var c4 = +c;
var d4 = +d;

console.log(a4, b4, c4, d4);