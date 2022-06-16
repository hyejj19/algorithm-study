/*input
60
100
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [m, n] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g)
  .map((v) => +v);

const isPrime = function (x) {
  // x가 1이면 소수가 아니므로 false
  if (x === 1) return false;
  // 2부터 시작해 제곱근까지 나누어 떨어지는 수가 있으면 소수가 아니므로 false
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  // 조건을 모두 통과하면 소수이므로 true
  return true;
};

const solution = function (m, n) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (i === 2 || (i % 2 !== 0 && isPrime(i))) {
      min = Math.min(i, min);
      sum += i;
    }
  }
  let answer = sum > 0 ? `${sum}\n${min}` : -1;
  return answer;
};

console.log(solution(m, n));
