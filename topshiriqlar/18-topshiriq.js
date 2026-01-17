function getLongestWordLength(s){
    let obj = {};

    for (let i of s.split(" ")){
        obj[i]=i.length;
    }

    let max = Object.values(obj)[0];
    let item = Object.keys(obj)[0];

    for(let i=1; i<Object.entries(obj).length; i++){
        if (Object.values(obj)[i]>max){
            max = Object.values(obj)[i];
            item = Object.keys(obj)[i];
        }
    }

    return item;
}


let s = "Hello world, Leetcode";

console.log(getLongestWordLength(s));