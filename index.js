/*input
1
10
13
100
1000
10000
100000
0
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let nums = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g)
  .map(num => +num);

////////////////////////////////
// 오답코드
// const isPrime = function (x) {
//   // x가 1이면 소수가 아니므로 false
//   if (x === 1) return false;
//   // 2부터 시작해 제곱근까지 나누어 떨어지는 수가 있으면 소수가 아니므로 false
//   for (let i = 2; i <= Math.sqrt(x); i++) {
//     if (x % i === 0) return false;
//   }
//   // 조건을 모두 통과하면 소수이므로 true
//   return true;
// };

// const solution = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let n2 = 2 * nums[i];
//     let cnt = 0;
//     for (let j = nums[i] + 1; j <= n2; j++) {
//       if (j === 2 || (j % 2 !== 0 && isPrime(j))) cnt++;
//     }
//     console.log(cnt);
//   }
// };

solution(nums);

// 방법 1 : n 초과 2n 이하 범위 내에서 for문을 돌아 소수 판별 (이 때 2로 나누어 떨어지는 수는 거른다. )
// => 왜 틀렸지?????????

// 방법2 : 에라토스테네스의 체
