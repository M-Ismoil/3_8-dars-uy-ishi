function getUniqueNumbers(arr){
    let map = new Map();
    let lst = [];

    for (let i=0; i<arr.length; i++){
        if (map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }

    for (let [key,value] of map){
        if (value===1){
            lst.push(key);
        }
    }

    return lst;
}


let arr = [1,2,3,1,3,6,2,5];

console.log(getUniqueNumbers(arr));