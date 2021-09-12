
// Here this is normal condition.
// 'any' just switch off the TypeScript.

let cbd:any;

cbd = 10;
cbd = "string";

let item:string;
item = cbd;

// It works because of type 'any' But,
// If you are using 'Unknown' type then what happen ?
// Just see the below example.

let dat:unknown;

dat = 20;
dat = "hey";

let test:string;

// test = dat; // this line give you an error because 'Unknown' type is mismatch with the test type variable type.
// So now we have to check for 'string' type then only we are able to asign dat variable to the test variable.
// see the below code.

if(typeof dat === 'string') {
    test = dat; // This code works because now dat variable type and test variable type get matched.
}