let stack1=[];
let stack2=[];
function push(node)
{
    // write code here
    stack1.push(node);
    let len=stack2.length;
    if(len==0||node<stack2[len-1]){
        stack2.push(node);
    }else {
        stack2.push(stack2[len-1]);
    }
}
function pop()
{
    // write code here
    if(stack1.length==0) return null;
    stack2.pop();
    return stack1.pop();
}
function top()
{
    // write code here
    if(stack1.length==0) return null;
    else return stack1[stack1.length-1];
}
function min()
{
    // write code here
    if(stack2.length==0) return null;
    return stack2[stack2.length-1];
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};