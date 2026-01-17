function getNextGreater(nums){
    let lst = [];

    for (let i=0; i<nums.length; i++){
        let greater = -1;

        for (let j=i+1; j<nums.length; j++){
            if (nums[i]<nums[j]){
                greater = nums[j];
                break;
            }
        }
        lst.push(greater);
    }

    return lst;
}

let nums = [2,1,2,4,3];
console.log(getNextGreater(nums));