// let myname='hitesh   '
// let mychannel='chai    '

// console.log(myName.trueLength);

let myHero=['thor','spiderman'];

let heroPower={
    thor:'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tiger =function(){
    console.log('Tiger is present in all objects');
}

Array.prototype.lion = function(){
    console.log('lion is present in all Array');
}

// heroPower.tiger()
// myHero.tiger()

// myHero.lion()
// heroPower.lion() //error

/* ******************************* */
//Inheritance


const User ={
    name:'chai',
    email:'chai@google.com'
}

const Teacher= {
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'Js assignment',
    fullTime: true,

    __proto__:TeachingSupport  //inherit with TeachingSupport
}

Teacher.__proto__=User


//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLen=function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLen()
'nishant'.trueLen()
'iceTea'.trueLen()