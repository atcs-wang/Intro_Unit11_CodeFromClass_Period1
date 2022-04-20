"use strict";
let a = [];
let b = new Array();
console.log(a);
console.log(b);
let c = [1, 3, 5, 7, 9];
let d = new Array("hi", "hello", "are you sleepy?");
console.log(c);
console.log(d);
let e = [10];
// this doesn't make an array with 10 in it, makes an array with 10 empty items
let f = new Array(10);
console.log(e);
console.log(f);
let tuple = [10, 'hi'];
let tupleOfNums = [1, 2, 3, 4, 5];
let nums = [5, 7, 9];
let seven = nums[1];
let five = nums[0];
let nine = nums[2];
let whoops = nums[-1]; // can't use negative numbers
nums[1] = 77;
nums[3] = 100; // this works!
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
nums.length = 10;
console.log(nums);
console.log(nums.length);
nums.length = 2;
console.log(nums);
console.log(nums.length);
console.log(nums[2]);
