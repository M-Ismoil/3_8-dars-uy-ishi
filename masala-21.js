function getDoubleAttend(nums){
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
        if (a[1]===2){
            lst.push(a[0]);
        }
    }
    return lst;
}

let nums = [4,3,2,7,8,2,3,1];
console.log(getDoubleAttend(nums));