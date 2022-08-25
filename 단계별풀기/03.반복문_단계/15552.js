/*input
5
1 1
12 34
5 500
40 60
1000 1000
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [T, ...testCase] = fs.readFileSync(readFileSyncAddress).toString().trim().replaceAll(/\r/g,'').split(/\n/g);
T = Number(T);

let answer = '';

for(let i = 0; i < T; i++){
    const [A, B] = testCase[i].split(/\s/g).map(v => +v);
    answer += `${A+B}\n`;
}


//제출
console.log(answer);