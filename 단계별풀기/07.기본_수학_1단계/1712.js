/*input
1000 70 170
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [A, B, C] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = function (a, b, c) {
  const br = Math.floor(a / (c - b)) + 1;
  return b >= c ? -1 : br;
};

console.log(solution(A, B, C));
