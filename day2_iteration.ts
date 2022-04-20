let array : number[] = [3,17,2,0.5,8];

console.log(array);
console.log(array.length);
// iteration technique 1: for loop! loop through each index i
for (let i = 0; i < array.length; i++){
    array[i] += 1;
}
console.log(array);
// iteration technique 2: for-of loop
//sum up all the numbers
let sum : number = 0;
for (let n of array) {
    sum += n;
}
console.log("Sum: " + sum);

// iteration technique 3: forEach

array.forEach( function(value : number, index : number) {
    console.log(`array[${index}] = ${value}`);
} )