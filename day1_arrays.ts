let a : number[] = [];
let b : Array<string> = new Array();
console.log(a);
console.log(b);
let c : number[] = [1,3,5,7,9];
let d : string[] = new Array("hi", "hello", "are you sleepy?");

console.log(c);
console.log(d);

let e : number[] = [10];
// this doesn't make an array with 10 in it, makes an array with 10 empty items
let f : number[] = new Array(10); 
console.log(e);
console.log(f);

// Can declare a fixed-size array with specific types
let tuple : [number, string] = [10, 'hi'];
let tupleOfNums : [number, number, number, number, number] = [1,2,3,4,5];


let nums : number[] = [5,7,9];
console.log(nums);
console.log(nums.length);

let seven : number = nums[1];
let five : number = nums[0];
let nine : number = nums[2]; 
let illegal : number = nums[3]; // out of bounds -> undefined
let whoops : number = nums[-1]; // can't use negative numbers

nums[1] = 77;
nums[3] = 100; // this works! Increases length
console.log(nums);
console.log(nums.length);

nums[5] = 200;
console.log(nums); // this leaves an empty spot at 4
console.log(nums.length); 

console.log(nums[4]);

// Danger! Don't set things to undefined
/* @ts-ignore */
// nums[5] = undefined; 
// console.log(nums);
// console.log(nums.length); 

nums.length = 10 // increasing length doesn't add elements (empty spots)
console.log(nums);
console.log(nums.length); 

nums.length = 2 // reducing the length deletes elements
console.log(nums);
console.log(nums.length);
console.log(nums[2]);
