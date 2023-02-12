/* input
2
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let nums = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split('\n')
  .map(num => +num.replace(/\r/, ''));

const T = nums[0];

const dp = new Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= T; i++) {
  console.log(dp[nums[i]]);
}
