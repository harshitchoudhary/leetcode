//Time: O(nlogn)
//Space: O(n)
var topKFrequent = function(nums, k) {
    let visited = {};
    for(let num of nums)
        visited[num] = visited[num]+1 || 1;
    var sortable = [];
    for (var vehicle in visited) {
        sortable.push([vehicle, visited[vehicle]]);
    }

    sortable.sort(function(a, b) {
        return  b[1]-a[1];
    });
    let res = [];
    for(let i = 0; i<k;i++){
        res.push(sortable[i][0]);
    }
    return res;
};
