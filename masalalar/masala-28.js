function longestPalindromSubstring(s){
    let lst = s.split("");
    for (let i=lst.length-1; i>=0; i--){
        let str = lst.slice(0,i);
        if (str.join("")===str.reverse().join("")){
            return str.join("");
        }
    }

    return `Palindrom yo'q!`;
}

let s = "babad";
console.log(longestPalindromSubstring(s));