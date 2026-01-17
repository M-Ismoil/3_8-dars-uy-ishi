function isBracketsRight(s){
    let lst = [];
    let obj = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let a of s.split("")){
        if (obj[a]){
            if (lst.length==0 || lst[lst.length-1]!=obj[a]){
                return `Noto'g'ri!`
            }
            lst.pop();
        }else{
            lst.push(a);
        }
    }

    if (lst.length==0){
        return `To'g'ri!`;
    }
    return `Noto'g'ri!`
}

let s = "()[]{}";
console.log(isBracketsRight(s));