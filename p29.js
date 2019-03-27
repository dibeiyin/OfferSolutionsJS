function printMatrix(matrix)
{
    // write code here
    if(matrix.length==0) return;
    let rows=matrix.length;
    let cols=matrix[0].length;
    let start=0;
    let data=[];
    while(rows>start*2&&cols>start*2){
        data.concat(printCircle(matrix,rows,cols,start,data));
        start++;
    }
    return data;
}
function printCircle(matrix,rows,cols,start,data){
    let endX=cols-start-1;
    let endY=rows-start-1;
    for(let i=start;i<=endX;i++){
        data.push(matrix[start][i]);
    }
    if(start<endY){
        for(let i=start+1;i<=endY;i++){
            data.push(matrix[i][endX]);
        }
    }
    if(start<endX&&start<endY){
        for(let i=endX-1;i>=start;i--){
            data.push(matrix[endY][i]);
        }
    }
    if(start<endX&&start<endY-1){
        for(let i=endY-1;i>=start+1;i--){
            data.push(matrix[i][start]);
        }
    }
    return data;
}
module.exports = {
    printMatrix : printMatrix
};