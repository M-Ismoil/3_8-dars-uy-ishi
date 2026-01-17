function twistTo90Degrees(matrix){
    let matrixNew = [];

    for (let i=0; i<matrix[0].length; i++){
        let lst = [];
        for (let j=matrix.length-1; j>=0; j--){
            lst.push(matrix[j][i]);
        }
        matrixNew.push(lst);
    }
    return matrixNew
}

let matrix = [[1,2],[3,4]];
console.log(twistTo90Degrees(matrix));