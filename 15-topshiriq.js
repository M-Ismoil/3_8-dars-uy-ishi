function getReversed(s){
    let sNew = "";

    for (let i=s.length-1; i>=0; i--){
        sNew+=s[i];
    }

    return sNew;
}


let s = "hello";
console.log(getReversed(s));