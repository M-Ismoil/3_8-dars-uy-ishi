function theseAreAnogramm(s, t){
    return s.split("").sort().join("")===t.split("").sort().join("");
}

let s = "anagram";
let t = "nagaram";

console.log(theseAreAnogramm(s,t));