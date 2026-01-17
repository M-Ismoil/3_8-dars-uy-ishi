function getAverageValue(arr){
    let sum = 0;

    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }

    return sum/arr.length;
}


let arr = [4,5];

console.log(getAverageValue(arr));