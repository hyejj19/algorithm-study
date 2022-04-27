/*input
4
1 100 100 100
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [N, score] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g);

N = Number(N);
score = score.split(/\s/g).map(Number);

// 최대 점수
const M = Math.max(...score);

// 조작된 점수
newScore = score.map((e)=>e/M*100);

// 점수의 합
const result = newScore.reduce((a,c) => a + c, 0);

// 평균
console.log(result/N);