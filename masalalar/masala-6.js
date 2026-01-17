function getLongestUnreapetedSubstring(s){
    let lst = [];
    let lst1 = [];

    for (let a of s){
        if (lst1.includes(a)){
            lst.push(lst1.join("").length);
            let index = lst1.indexOf(a);
            lst1 = lst1.slice(index + 1);
        }
        lst1.push(a);
    }
    lst.push(lst1.join("").length);

    console.log(lst)
    return Math.max(...lst);
}

let s = "abcabcbb";
console.log(getLongestUnreapetedSubstring(s));