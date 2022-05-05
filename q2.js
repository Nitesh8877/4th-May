function get(n,m,arr){
    let set=new Set();

    let max_ans=Number.MAX_VALUE;
  

    let cnt=-1;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            set.add(arr[i][j]);
        }
    
    console.log(set);
    let size=set.length;
    if(cnt<size){
        max_ans=Math.min(max_ans,i);
    }
    }
  set.clear();
    return max_ans;
}


let arr
=[[1, 2, 13, 4, 5],
[1, 2, 2, 4, 17],
[1, 3, 11, 3, 1]];
let n = arr.length;
let m = arr[0].length;
console.log(get(n, m, arr));
