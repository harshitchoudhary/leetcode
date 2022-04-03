// Time: O(n)
// Space: O(n)

var containsDuplicate = function(nums) {
    let visited = {}; // visited object to account of number visited from the array nums
    for(let num of nums){
        if(num in visited) return true; //condition to check if object already has num
        visited[num] = 1;
    }
    return false;
}
