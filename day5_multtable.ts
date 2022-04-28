let header : string = "   ";
let line : string = "   ";
for (let i = 1; i <= 9; i++){
    header += i + "  ";
    line += "---";
}
console.log(header);
console.log(line);

for (let row : number = 1; row <= 9; row++){
    let rowToPrint : string = row + "| ";
    //construct the row's columns
    for (let col : number = 1; col <= 9; col++){
        let product : number = row * col;
        if (product < 10) //one digit
            rowToPrint += product + "  ";
        else //two digits
            rowToPrint += product + " ";
    }
    console.log(rowToPrint)
}
