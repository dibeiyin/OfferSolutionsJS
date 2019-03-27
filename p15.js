
// function NumberOf1(n)
// {
//     // write code here
//     let count=0;
//     let flag=1;
//     while(flag){
//         if(flag&n){count++;}
//         flag=flag<<1;
//     }
//     return count;
// }
// module.exports = {
//     NumberOf1 : NumberOf1
// };

//把一个整数的二进制-1再和原来的整数做与运算，相当于把整数的二进制表示中最右边的1变为0
function NumberOf1(n)
{
    // write code here
    let count=0;
    while(n){
        count++;
        n=(n-1)&n;
    }
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};