//Time: O(nlogn)
//Time: O(n)

var groupAnagrams = function(strs) {
    const sortedStr = strs.map(word => word.split("").sort().join(""));
    const hash = {};
    for(let str in strs){
        if(!hash[sortedStr[str]]){
            hash[sortedStr[str]] = [strs[str]];
        }else{
            hash[sortedStr[str]].push(strs[str]); 
        }
    }
    return Object.values(hash);
};
