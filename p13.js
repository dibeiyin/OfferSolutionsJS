function movingCount(threshold, rows, cols)
{
    // write code here
    if(threshold<0||rows<=0||cols<=0) return 0;
    var visited=[];
    for(let i=0;i<rows;i++){
        visited[i]=[];
        for(let j=0;j<cols;j++){
            visited[i][j]=false;
        }
    }
    let count=movingCountCore(threshold,rows,cols,0,0,visited);
    visited=[];
    return count;
}
function movingCountCore(threshold,rows,cols,row,col,visited){
    let count=0;
    if(row>=0&&row<rows&&col>=0&&col<cols&&!visited[row][col]&&(getSum(row)+getSum(col))<=threshold){
        visited[row][col]=true;
        count=1+movingCountCore(threshold,rows,cols,row+1,col,visited)+
            movingCountCore(threshold,rows,cols,row-1,col,visited)+
            movingCountCore(threshold,rows,cols,row,col+1,visited)+
            movingCountCore(threshold,rows,cols,row,col-1,visited)
    }
    return count;
}
function getSum(n){
    let sum=0;
    while(n>0){
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return sum;
}
module.exports = {
    movingCount : movingCount
};