function getMostRepeated(arr){
    let obj = {};

    for (let i=0; i<arr.length; i++){
        if (Object.keys(obj).includes(String(arr[i]))){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }

    let max = obj[arr[0]];
    let item = arr[0];
    for (let a in obj){
        if(max<obj[a]){
            max=obj[a];
            item=a;
        }
    }

    return item;
}


let arr = [1,2,2,1,2,3];

console.log(getMostRepeated(arr));