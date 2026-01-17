function isPalindrom(s){
    let sNew = "";

    for (let i=s.length-1; i>=0; i--){
        sNew+=s[i];
    }

    if (s === sNew){
        return `Palindrom`;
    }
    return `Palindrom emas`;
}


let s = "hello";
let s1 = "ababa";

console.log(isPalindrom(s));
console.log(isPalindrom(s1));