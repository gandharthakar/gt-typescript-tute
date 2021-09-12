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

let usrobj:{ id:number, name:string, isValidUser:boolean } = {
    id: 1,
    name: 'John Paul',
    isValidUser: true
};

console.log(usrobj.name);

// The above example is correct typescript format to define object.
// Now, another method to define your object types in typescript 
// This example is help you to re-use your object type multiple times anywhere.

type objtype1 = { id:number, name:string, isValidUser:boolean };

let nusrs:objtype1 = {
    id: 1,
    name: "User Name",
    isValidUser: false
}

console.log(nusrs.isValidUser);
