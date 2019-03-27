/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// function FindKthToTail(head, k)
// {
//     // write code here
//     if(head==null||k<=0) return null;
//     let left=head,right=head;
//     for(let i=0;i<k-1;i++){
//         if(right.next!=null){
//             right=right.next;
//         }else{
//             return null;
//         }
//     }
//     while(right.next!=null){
//         left=left.next;
//         right=right.next;
//     }
//     return left;
// }
// module.exports = {
//     FindKthToTail : FindKthToTail
// };