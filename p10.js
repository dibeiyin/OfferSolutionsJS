// function Fibonacci(n)
// {
//     // write code here
//     var index=2;
//     var a1=1,a2=1,sum;
//     if(n==0) return 0;
//     if(n==1) return 1;
//     if(n==2) return 1;
//     while(index<n){
//         sum=a1+a2;
//         a1=a2;
//         a2=sum;
//         index++;
//     }
//     return a2;
    
// }
// module.exports = {
//     Fibonacci : Fibonacci
// };


//跳台阶问题-斐波那契问题的变体
// function jumpFloor(number)
// {
//     // write code here
//      var index=2;
//     var a1=1,a2=2,sum;
//     if(number<1) return 0;
//     if(number==1) return 1;
//     if(number==2) return 2;
//     while(index<number){
//         sum=a1+a2;
//         a1=a2;
//         a2=sum;
//         index++;
//     }
//     return a2;
// }
// module.exports = {
//     jumpFloor : jumpFloor
// };

//变态跳台阶 f(n)=2^(n-1)
function jumpFloorII(number)
{
    // write code here
    if(number<1) return 0;
    return Math.pow(2,number-1);
}
module.exports = {
    jumpFloorII : jumpFloorII
};