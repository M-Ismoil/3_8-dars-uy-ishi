function getUniqueNumbers(nums){
    let map = new Map();

    for (let num of nums){
        if (map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1)
        }
    }
    let lst = [];

    for (let [key,value] of map){
        if (value===1){
            lst.push(key);
        }
    }

    if (lst == []){
        return `Unique ya'ni faqat bir marta qatnashgan son yo'q!`;
    }
    return lst;
}

let nums = [1,2,3,2,1,4];
console.log(getUniqueNumbers(nums));