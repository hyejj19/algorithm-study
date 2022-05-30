/*input
13
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [N] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = function (n) {
  if (n >= 1 && n <= 6) return 2;
  let k = 1;
  let j = 2;
  let f = k;
  for (let i = 1; i < n; i++) {
    if (n >= 6 * f && n <= 6 * k) return i + 1;
    f = k;
    k += j;
    j++;
  }
};

console.log(solution(N));
