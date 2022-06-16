/*input
13
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g)
  .map((v) => +v);

const solution = function (n) {
  let x = 1;
  let y = 1;
  while (5 * y < n) {
    y++;
  }
  if (5 * y === n) return y;
  while (y >= 0) {
    if (3 * x + 5 * y === n) return x + y;
    y--;
    if (3 * x + 5 * y === n) return x + y;
    x++;
  }
  return -1;
};

console.log(solution(input));
