function sortBy0(nums){
    for (let i=nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.push(nums.splice(i,1)[0]);
        }
    }
}

let nums = [0,1,0,3,12];
sortBy0(nums);
console.log(nums);