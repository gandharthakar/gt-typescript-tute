
let myFunc = (param1: number | string, param2: number | string) => {
    if( typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else if( typeof param1 === 'string' && typeof param2 === 'string') {
        return `${param1} ${param2}`;
    }
}

console.log(myFunc(5, 5));
console.log(myFunc("Hello", "World"));