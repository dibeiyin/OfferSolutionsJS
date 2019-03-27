function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}
function GetNext(pNode)
{
    // write code here
    if(pNode.right!=null){
        let node=pNode.right;
        while(node.left!=null){
            node=node.left;
        }
        return node;
    }else if(pNode.next==null){
        return null;
    } else if(pNode.next.left==pNode){
        return pNode.next;
    }else {
        let node=pNode.next;
        let flag=true;
        while(node.next!=null&&node.next.left!=node){
            node=node.next;
            if(node.next==null){
                flag=false;
            }
        }
        return flag?node.next:null;
    }
    return null;
}
module.exports = {
    GetNext : GetNext
};