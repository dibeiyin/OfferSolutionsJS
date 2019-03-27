/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// function printListFromTailToHead(head)
// {
//     // write code here
//     if(head==null) return [];
//     var arr=[];
//     while(head){
//         arr.unshift(head.val);
//         head=head.next;
//     }
//     return arr;
    
// }
// module.exports = {
//     printListFromTailToHead : printListFromTailToHead
// };


// function printListFromTailToHead(head)
// {
//     // write code here
//     if(head==null) return [];
//     var arr=[];
//     function print(head){
//         if(head==null){
//             return;
//         }
//         print(head.next);
//         arr.push(head.val);
//     }
//     print(head);
   
//     return arr;
    
// }
// module.exports = {
//     printListFromTailToHead : printListFromTailToHead
// };