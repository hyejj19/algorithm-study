/*input
5
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [nums, A] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g);

const [N, X] = nums.split(/\s/g).map(Number);

[...A] = A.split(/\s/g).map(Number);

let answer = '';
for(let x of A){
    if (x < X) answer += `${x} `;
}


//제출
console.log(answer);
