/*input
4
121
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [t, testcases] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

const isPrime = function (n) {
  // n이 1이면 소수가 아니므로 false
  if (n === 1 || n < 0) return false;
  // 2부터 시작해 제곱근까지 나누어 떨어지는 수가 있으면 소수가 아니므로 false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  // 조건을 모두 통과하면 소수이므로 true
  return true;
};

const solution = function (arr) {
  arr = arr.split(' ').map((v) => +v);
  let cnt = 0;
  for (let x of arr) {
    if (isPrime(x)) cnt++;
  }
  return cnt;
};

console.log(solution(testcases));
