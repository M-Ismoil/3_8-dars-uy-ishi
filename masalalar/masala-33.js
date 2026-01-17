function getSecontHigh(nums){
    return nums.sort((a,b)=>b-a)[1];
}

let nums = [3,2,1,5,6,4];
console.log(getSecontHigh(nums));