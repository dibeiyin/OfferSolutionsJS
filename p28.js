/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    return isSym(pRoot,pRoot);
}
function isSym(root1,root2){
    if(!root1&&!root2) return true;
    if(!root1||!root2) return false;
    if(root1.val!=root2.val) return false;
    return isSym(root1.left,root2.right)&&
        isSym(root1.right,root2.left);
}
module.exports = {
    isSymmetrical : isSymmetrical
};