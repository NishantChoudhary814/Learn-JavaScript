function SetUsername(name){
    this.username=name;
    console.log('called');
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email;
    this.password=password
}

const chai =new createUser('chai','chai@ex.com','123');
console.log(chai);
