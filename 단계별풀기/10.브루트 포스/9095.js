//백준 9095 
//1,2,3 더하기

/* input
3
4
7
10
*/

// 백준 제출용
//const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

let fs = require('fs');
let input = fs.readFileSync(readFileSyncAddress).toString().split('\n');
let newArr = [];

const testCaseNum = +input[0];

for(let i = 1; i<=testCaseNum;i++) {
    const arr=input.map((v)=>+v);
    newArr.push(arr[i]);
}

////////************////////
let result = '';

function DFS(n,sum) {
    let cnt = 0; 
    //sum이 n을 초과하는 경우 정답이 아니므로 0을 반환.

    if(sum > n) return 0; 
    //sum 이 n이 되면 정답이 되므로 1을 반환.
    
    if(sum===n){
        return 1;
    }

    //재귀로 반환 받는 숫자만큼 cnt에 누적하며 재귀호출
    else{
        for(let i = 1; i <= 3; i++){
            cnt += DFS(n,sum+i);
        }
    }
    return cnt;
}

for( let i = 0; i < testCaseNum; i++){
    let n = newArr[i];
    result += `${DFS(n,0)}\n`;
}

//제출
console.log(result);