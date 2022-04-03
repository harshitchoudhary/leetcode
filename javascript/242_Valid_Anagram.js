//Time: O(s+t)
//Space: O(s+t)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
  
    let visitedS = {}, visitedT = {};
  
    for(let num of s)
        visitedS[num] = visitedS[num]+1 || 1;
  
    for(let num of t)
        visitedT[num] = visitedT[num]+1 || 1;
  
    for(let keys in visitedS){
        if(visitedS[keys] !== visitedT[keys]) return false;
    }
  return true;
};
