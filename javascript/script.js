/*console.log("hello js from external js...");
document.write("from js");*/

var a=10;//number
console.log("a: ",a);
console.log("this is :",typeof(a));

var str="this is a string";//string
console.log("str: ",str);
console.log("this is :",typeof(str));

var bool1=true;//boolean
console.log("bool1: ",bool1);
console.log("this is :",typeof(bool1));

var bool2=false;//boolean
console.log("bool2: ",bool2);
console.log("this is :",typeof(bool2));

var u=undefined;//undefined
console.log ("u: ",u);
console.log("this is :",typeof(u));

var n=null;//null
console.log('n: ',n);
console.log("this is :",typeof(n));

//global object
console.log(window);
var bike="hero honda";
window.console.log("bike : ",bike);

//variable scopes

//var
/*
    - add to global variable
    - function scoped
    -can be redclared and modified at any time
*/
{
var car="bmw";
console.log("car : ",car);
console.log("window.car : ",window.car);
var car;
car="audi";
console.log("car : ",car);
car="benz";
console.log("car : ",car);
}
console.log("car from outside block: ",car);

//let

/*
    - donot add to global variable
    - block scoped
    - cannot be redeclared
    - can update value later
    - declaration and initialization can be done in two steps
*/ 
{
let fruit="apple";
console.log("fruit : ",fruit);
console.log("window.fruit: ",window.fruit);
 // let fruit; cannot redeclare error
 fruit="orange";
 console.log("fruit: ",fruit);
  let food;
  food="rice"
}
//console.log("fruit from outside: ",fruit); error fruit not defined

//const 

/* 
    - do not add to global scope
    - block scope
    - cannot be redeclared
    - cannot update value later
     - declaration and initialization can be done only in one steps
*/
{
 const place="new york";
 console.log("place :",place);
 console.log("window.place :",window.place);
 //const place;
 //place="mumbai";error Assignment to constant variable.
 //const country; missing initializer in const declaration
}
//console.log("place from outside: ",place); error place not defined
