// var stack1=[];
// var stack2=[];
// function push(node)
// {
//     // write code here
//     if(node!=null){
//         stack1.push(node);
//     }
// }
// function pop()
// {
//     // write code here
//     if(stack2.length>0){
//         return stack2.pop();
//     }else {
//         while(stack1.length>0){
//             stack2.push(stack1.pop());
//         }
//         return stack2.pop();
//     }
// }
// module.exports = {
//     push : push,
//     pop : pop
// };

var stack=[];
function push(node)
{
    // write code here
    if(node!=null){
        stack.unshift(node);
    }
}
function pop()
{
    // write code here
    if(stack.length>0){
        return stack.shift();
    }else {
        return null;
    }
}
module.exports = {
    push : push,
    pop : pop
};