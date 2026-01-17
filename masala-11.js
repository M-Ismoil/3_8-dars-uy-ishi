function rotateRightKtimes(nums, k=3){
    k=k%nums.length;
    let end = nums.splice(nums.length-k,k);
    return end.concat(nums);
}

let nums = [1,2,3,4,5,6,7];
console.log(rotateRightKtimes(nums,3));