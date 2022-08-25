/*input
5
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [T] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/g).map(v => +v);

let answer = '';
let tmp = '';

for(let i = 1; i <= T; i++){
    tmp += '*';
    answer += `${tmp}\n`
}


//제출
console.log(answer);