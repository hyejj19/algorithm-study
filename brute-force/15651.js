/* input
3 3 
*/

// 백준 제출용
const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
//const readFileSyncAddress = 'input.txt';

let fs = require('fs');
let input = fs.readFileSync(readFileSyncAddress).toString().split('').map(function(a) {
    return +a
  });

for(let i = 0; i < input.length; i++) {
    if(input[i]===0) input.splice(i,1);
}

const n = input[0];
const m = input[1];

//풀이과정
function solution(n,m){
    let tmp = new Array(m).fill(0); //0,0
    let result = '';
    function DFS(L,s){
        if(L===m){
            result += `${tmp}\n`;
            return;
        }
        else{
            for(let i = s ; i<=n; i++){
                tmp[L]=i;
                DFS(L+1,s);
            }
        }
    }

    DFS(0,1);
}

console.log(solution(n,m));