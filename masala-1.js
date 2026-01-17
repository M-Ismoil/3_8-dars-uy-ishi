function getIndexs(nums, target=9){
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]+nums[j]===target){
                return `${i} va ${j} chi indexdagi qiymatlar yig'indisi: ${target} (target)ga teng!\n${nums[i]} + ${nums[j]} = ${nums[i]+nums[j]}`;
            }
        }
    }
}

let nums = [2,7,11,15];

console.log(getIndexs(nums));