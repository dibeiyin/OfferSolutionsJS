/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(pHead==null) return null;
    if(pHead.next==null) return pHead;
    let pre=null,cur=pHead,next=pHead.next;
    pHead.next=null;
    while(next.next!=null){
        pre=cur;
        cur=next;
        next=next.next;
        cur.next=pre;
    }
    next.next=cur;
    return next;
}
module.exports = {
    ReverseList : ReverseList
};