// function duplicate(numbers, duplication)
// {
//     // write code here
//     //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
//     //函数返回True/False
//     numbers.sort();
//     for(let i=0;i<numbers.length-1;i++){
//         if(numbers[i]===numbers[i+1]){
//             duplication[0]=numbers[i];
//             return true;
//         }
//     }
//     return false;
// }
// module.exports = {
//     duplicate : duplicate
// };

// function duplicate(numbers, duplication)
// {
//     // write code here
//     //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
//     //函数返回True/False
//     var dic=[];
//     for(let i=0;i<numbers.length;i++){
//         if(dic[numbers[i]]!="undefined"){
//             duplication[0]=numbers[i];
//             return true;
//         }else {
//             dic[numbers[i]]=true;
//         }
//     }
//     return false;
// }
// module.exports = {
//     duplicate : duplicate
// };

// function duplicate(numbers, duplication)
// {
//     // write code here
//     //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
//     //函数返回True/False
//    let i=0;
//    while(i<numbers.length){
//        while(numbers[i]!=i){
//            if(numbers[i]==numbers[numbers[i]]){
//             duplication[0]=numbers[i];
//             return true;
//            }else {
//               let tmp=numbers[i];
//               numbers[i]=numbers[tmp];
//               numbers[tmp]=tmp;
//            }
//        }
//        i++;
//    }
//    return false;
// }

// module.exports = {
//     duplicate : duplicate
// };