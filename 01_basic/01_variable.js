const accountId=144553
let accountEmail="nishant123@gmail.com"
var accountPassword= 'qwert@123'
accountCity="Rewari"

// accountId=123  //not allowed
accountEmail="nish@outlook.com"
accountPassword="asdfgh"
accountCity="Ajmer"
let accountState
/*
 prefer not to use var
 because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);