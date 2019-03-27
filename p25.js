// /*function ListNode(x){
//     this.val = x;
//     this.next = null;
// }*/
// function Merge(pHead1, pHead2)
// {
//     // write code here
//     if(!pHead1&&!pHead2) {return null;}
//     if(!pHead1) {return pHead2;}
//     if(!pHead2) {return pHead1;}
//     let head,cur;
//     if(pHead1.val<=pHead2.val){
//         head=pHead1;
//         pHead1=pHead1.next;
//     }else {
//         head=pHead2;
//         pHead2=pHead2.next;
//     }
//     cur=head;
//     while(pHead1&&pHead2){
//         if(pHead1.val<=pHead2.val){
//         cur.next=pHead1;
//         pHead1=pHead1.next;
//          cur=cur.next;   
//         }else {
//         cur.next=pHead2;
//         pHead2=pHead2.next;
//             cur=cur.next; 
//         }
//     }
//     while(pHead1){
//        cur.next=pHead1;
//          pHead1=pHead1.next;
//          cur=cur.next;
//     }
//      while(pHead2){
//         cur.next=pHead2;
//          pHead2=pHead2.next;
//           cur=cur.next;
//     }
//     return head;
// }
// module.exports = {
//     Merge : Merge
// };


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if((!pHead1)||(!pHead2)){
        return pHead1||pHead2;
    }
    let head=null;
    if(pHead1.val<=pHead2.val){
        head=pHead1;
        head.next=Merge(pHead1.next,pHead2);
    }else {
        head=pHead2;
        head.next=Merge(pHead1,pHead2.next);
    }
    return head;
}
module.exports = {
    Merge : Merge
};