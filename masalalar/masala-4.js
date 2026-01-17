function getLongestGrowth(nums){
    let lst = [];
    let a = 0;

    nums.sort((a,b)=>a-b);

    for (let i=1; i<nums.length; i++){
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        if (nums[i]===nums[i-1]+1){
            a++;
        }else {
            lst.push(a+1);
            a=0;
        }
    }
    lst.push(a+1)

    return Math.max(...lst);
}

let nums = [100,4,200,1,3,2]
console.log(getLongestGrowth(nums));