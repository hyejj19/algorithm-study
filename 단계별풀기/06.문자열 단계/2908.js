/*input
734 893
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [A, B] = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ');

const solution = function (A, B) {
  A = Number(A.split('').reverse().join(''));
  B = Number(B.split('').reverse().join(''));
  const max = Math.max(A, B);
  return max;
};

console.log(solution(A, B));
