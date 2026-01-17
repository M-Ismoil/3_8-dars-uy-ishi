function getTrioSumEqualZero(nums){
    let lst = [];

    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            for (let k=j+1; k<nums.length; k++){
                if (nums[i]+nums[j]+nums[k]===0){
                    lst.push([nums[i],nums[j],nums[k]]);
                }
            }
        } 
    }

    return lst;
}

let nums = [-1,0,1,2,-1,-4];
console.log(getTrioSumEqualZero(nums));