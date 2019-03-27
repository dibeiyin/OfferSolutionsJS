function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length==0) return false;
    return Verify(sequence,0,sequence.length-1);
   
}
function Verify(sequence,start,end){
    if(start>=end) return true;
    let root=sequence[end];
    let i=start;
    for(;i<end;i++){
        if(sequence[i]>root){
            break;
        }
    }
    let j=i;
    for(;j<end;j++){
        if(sequence[j]<root){
            return false;
        }
    }
     return   Verify(sequence,start,i-1)&&Verify(sequence,i,end-1);
}
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};