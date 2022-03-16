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

function solution(t,numbers){
    for(let i =0; i<testCaseNum; i++){
        
    }
}

solution(testCaseNum,newArr);