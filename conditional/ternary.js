var a = 14;
var b = 19;
var c = 26;


// var x = a > b ? "A is gretter" : "B is gretter";
// console.log(x);


// a > b ? console.log(a + " is gretter") : console.log(b + " is gretter");


// var x = a < b ? b : a;
// console.log(x + " is gretter");


// var ans = a > b ? (a > c ? a : c) :( b > c ? b : c);
// console.log(ans + " is gretter");

var ans = a > b && a > c ? a : b > a && b > c ? b : c;
console.log(ans + " is gretter");

