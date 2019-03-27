// function minNumberInRotateArray(rotateArray)
// {
//     // write code here
//     if(rotateArray.length==0) return 0;
//     var r=rotateArray[0];
//     for(let i=1;i<rotateArray.length;i++){
//         if(r>rotateArray[i]){
//             r=rotateArray[i];
//         }
//     }
//     return r;
// }
// module.exports = {
//     minNumberInRotateArray : minNumberInRotateArray
// };

// function minVal(arr,start,end){
//     var r=arr[start];
//     for(let i=start+1;i<=end;i++){
//         if(r>arr[i]){
//             r=arr[i];
//         }
//     }
//     return arr[i];
// }
// function minNumberInRotateArray(rotateArray)
// {
// // write code here

// if(rotateArray.length==0) return 0;
// if(rotateArray.length==1) return rotateArray[0];
// let start=0,end=rotateArray.length-1,mid=start;
// while(rotateArray[start]>=rotateArray[end]){
//     if(end-start==1){
//         mid=end;
//         break;
//     }else {
//         mid=Math.floor((start+end)/2);
//         if(rotateArray[start]==rotateArray[end]&&rotateArray[start]==rotateArray[mid]){
//             return minVal(rotateArray,start,end);
//         }else if(rotateArray[mid]>=rotateArray[start]){
//             start=mid;
//         }else {
//             end=mid;
//         }
//     }
// }
// return rotateArray[mid];
// }
// module.exports = {
// minNumberInRotateArray : minNumberInRotateArray
// };

