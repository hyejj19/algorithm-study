/*input
5
1 1
2 3
3 4
9 8
5 2
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [T, ...testCase] = fs.readFileSync(readFileSyncAddress).toString().trim().replaceAll(/\r/g,'').split(/\n/g);
T = Number(T);

for(let i = 0; i < T; i++){
    const [A, B] = testCase[i].split(/\s/g).map(v => +v);
    console.log(A+B);
}


//제출
// console.log(N);