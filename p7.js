function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length===0&&vin.length===0){
        return null;
    }
    var root=new TreeNode(pre[0]);
    var index=vin.indexOf(pre[0]);
    var preLeft=pre.slice(1,index+1),
        preRight=pre.slice(index+1),
        vinLeft=vin.slice(0,index),
        vinRight=vin.slice(index+1);
    root.left=reConstructBinaryTree(preLeft,vinLeft);
    root.right=reConstructBinaryTree(preRight,vinRight);
    return root;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};