function binarySearch(arr, K) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
        if (arr[mid] == K)
            console.log("index is "+mid+" value=", arr[mid]);
            return;
        if (arr[mid] < K)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}
function searchMatrix(matrix, K) {
    var low = 0;
    let N=matrix.length-1
    var high = matrix.length- 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
        if (K >= matrix[mid][0]
            && K <= matrix[mid][N - 1])
            return binarySearch(matrix[mid], K);
        if (K < matrix[mid][0])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return false;
}



var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
var k = 3;
console.log(searchMatrix(matrix, k));