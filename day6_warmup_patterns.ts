
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4

//one possible solution:
for (let r = 1; r <= 4; r++){
    let row : string = "";
    for (let c = 1; c <= r; c++){
        row += c + " ";
    }
    console.log(row);
}

// This could be done with just one loop, actuallY!
// Here's another possible solution
// let row : string = "";
// for (let c = 1; c <= 4; c++){
//     row += c + " ";
//     console.log(row);
// }

// 4 3 2 1      
// 3 2 1        
// 2 1
// 1
console.log("\n");
//one possible solution:
for (let r = 4; r >= 1; r--){
    let row : string = "";
    for(let c = r; c >= 1; c--){
        row += c + " ";
    }
    console.log(row);
}


// 1 2 3 4
//   1 2 3
//     1 2
//       1
console.log("\n");
//one possible solution:
for (let r = 4; r >= 1; r--){
    let row : string = "";
    let spacesNeeded : number = 4 - r; 
    for (let s = 1; s <= spacesNeeded; s++){
        row += "  ";
    }
    for(let c = 1; c <= r; c++){
        row += c + " ";
    }
    console.log(row);
}
