"use strict";
// Type function can be distinguished by their return data type.
// Usually default it is based on what type of data you are going to return (automatic).
function numericFunction() {
    return 10;
}
function stringFunction() {
    return "Hello World";
}
function boolFunction() {
    return true;
}
function arrayFunction() {
    return [];
}
function objFunction() {
    return {};
}
function nullFunction() {
    return null;
}
function undefinedFunction() {
    return undefined;
}
console.log("This is numeric || number type function : " + numericFunction());
console.log("This is normal text || string type function : " + stringFunction());
console.log("This is boolean type function : " + boolFunction());
console.log("This is array type function : " + arrayFunction());
console.log("This is object type function : " + objFunction());
console.log("This is null type function : " + nullFunction());
console.log("This is undefined type function : " + undefinedFunction());
