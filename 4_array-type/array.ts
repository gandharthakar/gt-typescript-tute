
type strarr1 = string[];
type strarr2 = number[];
type strarr3 = [string, number, boolean];
type strarr4 = any[];

let arr1:strarr1 = ["HTML", "CSS", "JavaScript", "TypeScript"];
let arr2:strarr2 = [1, 2, 3, 4, 5];
let arr3:strarr3 = ["PHP", 3, true];
let arr4:strarr4 = ["MySQL", 7, true];

let any_type_array = ["String", 2, true];

console.log('This Array Contains Only String Values : ' + arr1);
console.log('This Array Contains Only Number Values : ' + arr2);
console.log('This Array Contains Defined Typed Values : ' + arr3);
console.log('This Array Contains Mixed Values With Defined Type Any[] (:Any Type) : ' + arr4);
console.log('This Array Contains Mixed Values But Not Defined Type Any[] (:Any Type) : ' + any_type_array);