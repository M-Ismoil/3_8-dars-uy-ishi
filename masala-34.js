function getTwoMostAttended(nums){
    let map = new Map();

    for (let num of nums){
        if (map.has(num)){
            map.set(num, map.get(num)+1);
        }else{
            map.set(num, 1);
        }
    }
    let lst = [];
    for (let a of map.entries()){
        lst.push(a);
    }
    lst.sort((a, b)=>b[1]-a[1]);
    return [lst[0][0], lst[1][0]];
}

let nums = [1,1,1,2,2,3];
console.log(getTwoMostAttended(nums));