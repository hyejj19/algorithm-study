/* input
2
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let n = +fs.readFileSync(readFileSyncAddress).toString();

const dp = new Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  // 2로 나누어 떨어질 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누어 떨어질 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[n]);
