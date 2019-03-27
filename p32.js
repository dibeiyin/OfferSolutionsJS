/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let array=[];
    let data=[];
    if(!root) return data;
    array.push(root);
    while(array.length>0){
        let node=array.shift();
        data.push(node.val);
        if(node.left){
            array.push(node.left);
        }
        if(node.right){
            array.push(node.right);
        }
    }
    return data;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};

//把二叉树打印成多行
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let q=[];
    q.push(pRoot);
    let result=[];
    let nextLevel=0,toBePrinted=1,currentArray=[];
    while(q.length>0){
        let node=q.shift();
        currentArray.push(node.val);
        if(node.left){
            q.push(node.left);
            nextLevel++;
        }
        if(node.right){
            q.push(node.right);
            nextLevel++;
        }
        toBePrinted--;
        if(toBePrinted==0){
            result.push(currentArray);
            toBePrinted=nextLevel;
            nextLevel=0;
            currentArray=[];
        }
    }
    return result;
}
module.exports = {
    Print : Print
};

//把二叉树打印成之字型
function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let stacks=[],flag=true;
    stacks[0]=[];
    stacks[1]=[];
    stacks[0].push(pRoot);
    let current=0,next=1;
    let result=[];
    let currentArray=[];
    while(stacks[0].length>0||stacks[1].length>0){
        let node=stacks[current].pop();
        currentArray.push(node.val);
        if(current==0){
            if(node.left){
                stacks[next].push(node.left);
            }
            if(node.right){
                stacks[next].push(node.right);
            }
        }else {
            if(node.right){
                stacks[next].push(node.right);
            }
            if(node.left){
                stacks[next].push(node.left);
            }
        }
        if(stacks[current].length==0){
            result.push(currentArray);
            next=1-next;
            current=1-current;
            currentArray=[];
        }
    }
    return result;
}