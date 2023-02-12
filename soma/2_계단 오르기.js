/* input
2
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let stairs = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split('\n')
  .map(num => +num.replace(/\r/, ''));

const N = stairs[0];
const dp = new Array(stairs.length + 1).fill(0);

dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];
dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3];

for (let i = 4; i <= stairs.length; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i],
  );
}

console.log(dp[N]);
