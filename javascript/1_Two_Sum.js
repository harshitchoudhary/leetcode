//Time: O(n)
//Space: O(n)
var twoSum = function(nums, target){
    let visited = {};
    for(let num in nums){
        let desired = target - nums[num];
        if(desired in visited)
            return [num,visited[desired]];
        visited[nums[num]] = num;
    }return [];
}
