
// Type function can be distinguished by their return data type.
// Usually default it is based on what type of data you are going to return (automatic).

function numericFunction():number {
    return 10;
}

function stringFunction():string {
    return "Hello World";
}

function boolFunction():boolean {
    return true;
}

function arrayFunction():[] {
    return [];
}

function objFunction():object {
    return {};
}

function nullFunction():null {
    return null;
}

function undefinedFunction():undefined {
    return undefined;
}

console.log("This is numeric || number type function : " + numericFunction());

console.log("This is normal text || string type function : " + stringFunction());

console.log("This is boolean type function : " + boolFunction());

console.log("This is array type function : " + arrayFunction());

console.log("This is object type function : " + objFunction());

console.log("This is null type function : " + nullFunction());

console.log("This is undefined type function : " + undefinedFunction());