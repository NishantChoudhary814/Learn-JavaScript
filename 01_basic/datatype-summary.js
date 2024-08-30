// Primitive
//call by value
//7 type : string number boolean null undefined symbol bigint

const id1 = Symbol("123");
const id2 = Symbol("123");

console.log(id1==id2)

const bigNum=123456786543n


//Non Primitive(Reference)
//call by refrence
// array object function

const heros=["batman","superman","spiderman"];
let myObj={
    name:"Nishant",
    age:21,
}

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof heros)