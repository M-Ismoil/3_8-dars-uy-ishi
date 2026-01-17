function getHighInEachLine(matrix){
    let lst = [];

    for (let a of matrix){
        lst.push(Math.max(...a));
    }
    return lst;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]; 
console.log(getHighInEachLine(matrix));