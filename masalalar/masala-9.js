function getLowestEvenNumberNotExistInLst(nums){
    nums = nums.filter((item)=>item>0).sort((a,b)=>a-b);

    if (nums[0]>1){
        return 1;
    }else {
        for (let i=0; i<nums.length-1; i++){
            if (nums[i]+1!==nums[i+1]){
                return nums[i]+1;
            }
        }
        return Math.max(nums)+1;
    }
}

let nums = [3,4,-1,1];
console.log(getLowestEvenNumberNotExistInLst(nums));