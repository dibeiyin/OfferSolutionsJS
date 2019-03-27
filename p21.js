// function reOrderArray(array)
// {
//     // write code here
//     let even=[],odd=[];
//     for(let i=0;i<array.length;i++){
//         if(isEven(array[i])){
//             even.push(array[i]);
//         }else {
//             odd.push(array[i]);
//         }
//     }
//     return odd.concat(even);
// }
//     function isEven(n){
//         return n%2==0;
//     }
// module.exports = {
//     reOrderArray : reOrderArray
// };

function reOrderArray(array)
{
    // write code here
    for(let i=0;i<array.length;i++){
        if(isOdd(array[i])){
            continue;
        }
        let j=i+1;
        while(j<array.length){
            if(isOdd(array[j])){
                while(j>i){
                let tmp=array[j-1];
                array[j-1]=array[j];
                array[j]=tmp;
                j--;
                }
                break;
            }
            j++;
        }
    }
    return array;
}
    function isOdd(n){
        return !(n%2==0);
    }