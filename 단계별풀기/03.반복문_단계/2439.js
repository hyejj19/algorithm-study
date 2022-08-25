/*input
5
*/

// 별 찍기 - 2 

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [T] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/g).map(v => +v);


let tmp = new Array(T).fill(' ');
let answer = '';

for(let i = T-1; i >= 0; i--){
    tmp[i] = '*';
    answer += `${tmp.join('')}\n`;
}

//제출
console.log(answer);
