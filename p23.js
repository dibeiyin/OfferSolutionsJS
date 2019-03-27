/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead==null) return null;
    let pFast=pHead,pSlow=pHead,p1=pHead,p2=pHead,isLoop=false,node,count=0;
    while(pFast){
        if(pFast.next==null) return null;
        pFast=pFast.next.next;
        pSlow=pSlow.next;
        if(pFast===pSlow){
            isLoop=true;
            node=pFast;
            break;
        }
    }
    if(isLoop){
        count++;
        pSlow=pSlow.next;
        while(pSlow!=node){
            pSlow=pSlow.next;
            count++;
        }
        for(let i=0;i<count;i++){
            p2=p2.next;
        }
        while(p1!=p2){
            p1=p1.next;
            p2=p2.next;
        }
        return p1;
    }
    return null;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};