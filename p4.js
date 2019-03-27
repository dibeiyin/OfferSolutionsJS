function Find(target, array)
{
    // write code here
    var rowNum=array.length;
    var colNum=array[0].length;
    var x=0,
        y=colNum-1;
    var start=array[0][y];
    while(x<=rowNum-1&&y>=0){
        if(target==start){
            return true;
        }else if(target<start){
            if(y!=0) {start=array[x][--y];}
            else {return false;}
        }else {
           if(x!=rowNum-1) {start=array[++x][y];}
           else {return false;}
        }
    }
    return false;
}
// console.log(Find(16,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));
module.exports = {
    Find : Find
};