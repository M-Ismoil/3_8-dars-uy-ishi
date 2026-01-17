function getFirstReapeated(s){
    let obj = {};

    for (let i of s){
        if (Object.keys(obj).includes(i)){
            return i;
        }else{
            obj[i]=1;
        }
    }

    return `Takroriy harf yo'q`;
}

let s = "leetcode";

console.log(getFirstReapeated(s));