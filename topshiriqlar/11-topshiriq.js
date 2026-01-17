function getReversed(arr){
    let first = 0
    let last = arr.length-1;

    while(first<last){
        let t = arr[first];
        arr[first]=arr[last];
        arr[last]=t;

        first++;
        last--;
    }

    return arr;
}


let arr = [1,2,3,4,5,6];

console.log(getReversed(arr));