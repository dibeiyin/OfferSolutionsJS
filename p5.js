function replaceSpace(str)
{
    // write code here
    str=str.replace(/\s/g,"%20");
    return str;
}
console.log(replaceSpace("hell"));
module.exports = {
    replaceSpace : replaceSpace
};