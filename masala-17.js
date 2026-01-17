function multiply(nums){
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if (i!=j){
                console.log(nums[i]+"*"+nums[j]+"="+nums[i]*nums[j]);
            }
        }
    }
}

let nums = [1,2,3,4];
multiply(nums);