let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
let sortButton = document.querySelector("button") as HTMLButtonElement;

sortButton.addEventListener("click", sortNames);

function sortNames(){
    let names : string = textArea.value;

    let nameList : string[] = names.split("\n");

    nameList.sort();

    // let str : string = "";
    // for (let name of nameList){
    //     str += name + "\n";
    // }
    // textArea.value = str;

    textArea.value = nameList.join("\n");
}