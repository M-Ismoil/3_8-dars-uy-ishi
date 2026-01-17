function isPalindrom(x){
    if (String(x).split("").reverse().join("") === String(x)){
        return `Palindrom`;
    }
    return `Palindrom emas`;
}

let x = 121;
console.log(isPalindrom(x));