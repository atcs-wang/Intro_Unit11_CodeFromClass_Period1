
function readNumbers() : number[] {
    let textArea = document.querySelector("textarea") as HTMLTextAreaElement;
    let numsAsStrings : string[] = textArea.value.split("\n");
    let nums : number[] = [];
    for (let i = 0; i < numsAsStrings.length; i++){
        if (numsAsStrings[i] === "")
            continue;
        let num : number = Number(numsAsStrings[i]);
        if (isNaN(num))
            continue;
        nums.push(num);
    }
    return nums;
}

function calcMean(nums : number[]) : number {
    let sum = 0;
    for (const n of nums){
        sum += n;
    }
    return sum / nums.length;
}

function countSpread(nums : number[], mean : number) : [number, number] {
    let aboveCount = 0;
    let belowCount = 0;
    for (const n of nums) {
        if (n > mean)
            aboveCount++;
        else if (n < mean)
            belowCount++;
    }
    return [aboveCount, belowCount];
}

let theButton = document.querySelector("button") as HTMLButtonElement;
theButton.addEventListener("click", function(){
    let nums : number[] = readNumbers();
    let mean : number = calcMean(nums);
    let spread : [number, number] = countSpread(nums, mean);
    let above : number = spread[0];
    let below : number = spread[1];

    (document.querySelector(".average") as HTMLParagraphElement).textContent = `Mean: ${mean}`;
    (document.querySelector(".above") as HTMLParagraphElement).textContent = `# above mean: ${above}`;
    (document.querySelector(".below") as HTMLParagraphElement).textContent = `# below mean: ${below}`;
})