const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


console.log(marvel_heros.concat(dc_heros));

const allHeros=[...marvel_heros,...dc_heros] //spread operator

const anotherArray=[1,2,3,[1,2,3,4,5,6],4,5,[6,7,[4,5]]]
const realArray=anotherArray.flat(Infinity)
console.log(realArray);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"})); //interesting
let a=20
let b=30
let c=-10
console.log(Array.of(a,b,c))



 