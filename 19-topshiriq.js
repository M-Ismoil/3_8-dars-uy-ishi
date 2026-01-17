function getCapitalized(s){
    let lst = s.split(" ");

    for (let i=0; i<lst.length; i++){
        let a = lst[i][0].toUpperCase();
        let b = lst[i].split("").slice(1).join("").toLowerCase();

        lst[i]=a+b;
    }

    return lst.join(" ");
}


let s = "Hello world, leetcode";

console.log(getCapitalized(s));