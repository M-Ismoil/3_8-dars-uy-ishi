function getSame(arr1, arr2){
    let lst = [];

    for (let i=0; i<arr1.length; i++){
        for (let j=0; j<arr2.length; j++){
            if (arr1[i]==arr2[j]){
                lst.push(arr1[i]);
            }
        }
    }

    return lst;
}

let arr1 = [1,2,3,4,5];
let arr2 = [4,5,6,7,8];
console.log(getSame(arr1, arr2));