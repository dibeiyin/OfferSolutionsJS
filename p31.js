function IsPopOrder(pushV, popV)
{
    // write code here
    if(pushV.length==0||popV.length==0) return false;
    let stack=[],indexPop=0;
    for(let i=0;i<pushV.length;i++){
        stack.push(pushV[i]);
        while(stack.length>0&&stack[stack.length-1]==popV[indexPop]){
            stack.pop();
            indexPop++;
        }
    }
    return stack.length==0;
}
module.exports = {
    IsPopOrder : IsPopOrder
};