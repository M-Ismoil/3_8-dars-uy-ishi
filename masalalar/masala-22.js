function getMajority(nums){
    let major = nums.length/2;
    let map = new Map()

    for (let num of nums){
        if (map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    }

    for (let [key, value] of map){
        if (value>major){
            return key;
        }
    }
    return `Majority son yo'q!`;
}

let nums = [2,2,1,1,1,2,2];
console.log(getMajority(nums));