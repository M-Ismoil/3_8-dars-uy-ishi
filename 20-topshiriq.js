function getDataType(data){
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}


let data = 1;

console.log(getDataType(data));