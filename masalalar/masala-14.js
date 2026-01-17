function getFirstNotRepeated(s){
    let lst = s.split("");
    for (let a of lst){
        let b = 0;
        for (let i=0;i<lst.length-1; i++){
            if (a===lst[i]){
                b++;
            }
        }

        if (b==1){
            return a+" harfi!";
        }
    }

    return `Bunday yo'q!`;
}

let s = "leetcode";

console.log(getFirstNotRepeated(s));