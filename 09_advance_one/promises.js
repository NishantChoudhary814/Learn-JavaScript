const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB connection/call,cryptography,network

    setTimeout(function(){
        console.log("Hey there");
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello 2");
        resolve();
    },1000)
}).then(function(){
    console.log('Second Promise Consumed');
   
})

// console.log("Outside");


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello three");
        const obj={
            username:'Nishant Choudhary',
            email:"nishant@xyz.com"
        }
        resolve(obj);
    },1000);
})
promiseThree.then(function(obj){
    console.log('Complete 3');
    console.log(obj);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'Tiger',email:'tiger@xyz.com'})
        }
        else{
            reject('Error :Something went wrong');
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('Problem is either resolved or reject');
})


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(error){
            resolve({username:'javascript',password:'123'})
        }else{
            reject('Error: Js went wrong')
        }
    },1000)
})
//now we are not handling with then or catch
// we are going to handle with async and await

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUser() {
  // async await donot have property to handle error so we use try catch
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        //response is in string datatype
        const data= await response.json(); //it take time so we use await  
        console.log(data);
    }
    catch(error){
        console.log('Error : ',error);
    }
}

getAllUser();


fetch('https://api.github.com/users/nishantchoudhary814')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})