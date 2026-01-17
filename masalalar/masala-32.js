function isPalindrome(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
}

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))
