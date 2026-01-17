function changeEachZeroIfEachHaveZero(matrix){
    let row = new Set();
    let col = new Set();

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j]===0){
                row.add(i);
                col.add(j);
            }
        }
    }

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (row.has(i) || col.has(j)){
                matrix[i][j]=0;
            }
        }
    }

    return matrix;
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]]; 
console.log(changeEachZeroIfEachHaveZero(matrix));