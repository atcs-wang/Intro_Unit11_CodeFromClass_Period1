function readWords() : string[] {
    let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
    let wordsArray : string[] = textArea.value.split(" ");
    return wordsArray;
}

function distinctWords(words : string[]) : string[] {
    let distinct : string[] = [];
    //fill distinct with distinct words from words!
    for (const word of words) {
        // if ( ! distinct.includes(word) ) {
        //     distinct.push(word);
        // }
        let foundIt : boolean = false;
        for (const x of distinct){
            if (x === word){
                foundIt = true;
                break;
            }
        }

        if (!foundIt){
            distinct.push(word);
        }

    }
    return distinct;
}

let button = document.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", function(){
    let words : string[] = readWords();
    let distinct : string[] = distinctWords(words);

    (document.querySelector("#distinct") as HTMLParagraphElement).textContent = distinct.join(", ");
   
})