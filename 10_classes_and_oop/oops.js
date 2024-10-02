// const User= {
//     username:'Nishant',
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(User.username)
// console.log(User.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this //we you dont return it will implicitly return automatically
}

const userOne = new User('tiger',12,true);
const userTwo= new User('lion',11,false);

console.log(userOne.constructor);
console.log(userTwo);

