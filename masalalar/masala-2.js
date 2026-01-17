function getUniqueNumber(nums){
    let map = new Map();

    for (let num of nums){
        if (map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1)
        }
    }
    

    for (let [key,value] of map){
        if (value===1) return key;
    }

    return `Unique ya'ni faqat bir marta qatnashgan son yo'q!`;
}

let nums = [4,1,2,1,2]
console.log(getUniqueNumber(nums));