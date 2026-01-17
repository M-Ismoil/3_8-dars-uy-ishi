function binarySearch(nums, target=7){
    let low = 0;
    let high = nums.length-1;

    while (low<=high){
        let mid = Math.floor((low+high)/2);

        if (nums[mid]==target){
            return `Bor!`;
        }else if(nums[mid]<target){
            low = mid+1;
        }else{
            high = mid-1
        }
    }

    return `Bunday yo'q!`;
}

let nums = [1,3,5,7,9];
console.log(binarySearch(nums,7));