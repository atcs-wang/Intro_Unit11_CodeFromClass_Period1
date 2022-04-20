import * as rl from "readline-sync";
let nameList : string[] = [];
let name : string = rl.question("Enter Name: ");
while (name !== "") {
    nameList.push(name);
    name = rl.question("Enter Name: ");
}

nameList.sort();

// console.log(nameList);

for (let i = 0; i < nameList.length; i++){
    console.log(`${i}: ${nameList[i]}`);
}
