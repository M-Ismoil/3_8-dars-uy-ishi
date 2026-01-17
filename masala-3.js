function sortByGrowth(nums){
    return nums.sort((a,b)=>a-b);
}

let nums = [5,3,8,1];
console.log(sortByGrowth(nums));