/*input
1 1
2 3
3 4
9 8
5 2
0 0
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [input] = fs.readFileSync(readFileSyncAddress).toString().split(/\s/g).map(Number);

let N = input;
let isTrue = true;
let cnt = 0;
let sum = 0;

while(cnt !== 5){
    cnt ++;
    N = 

    if(N === input) isTrue = false;
}

console.log(cnt);