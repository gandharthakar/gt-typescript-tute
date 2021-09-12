"use strict";
// In this file you can define object type itself and its inner properties types.
// let myobj:{} = {
//     id: 1,
//     name: "John Paul",
//     isValidUser: true
// }
// console.log(myobj.name);
// The above commented line of code tells you when you try to access
// object inner property it wil give you an error because its object type is define but
// inner child properties are not defined.
let usrobj = {
    id: 1,
    name: 'John Paul',
    isValidUser: true
};
console.log(usrobj.name);
let nusrs = {
    id: 1,
    name: "User Name",
    isValidUser: false
};
console.log(nusrs.isValidUser);
