class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

const userOne=User('tiger')
// console.log(userOne.createId());  //error

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const helper=new Teacher('divya','divya@gmail.com')
// console.log(helper.createId()); //error

