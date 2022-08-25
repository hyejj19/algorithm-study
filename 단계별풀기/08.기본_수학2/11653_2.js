/*input
9991
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let n = Number(fs.readFileSync(readFileSyncAddress).toString().trim());

const solution = function (n) {
  let sosu = 2;
  // n이 1이 될 때까지 계속해서 나누어준다.
  while (n !== 1) {
    // 만약 n이 sosu로 나누어 떨어진다면 소인수이다.
    if (n % sosu === 0) {
      console.log(sosu);
      n /= sosu;
    } else {
      sosu++;
    }
  }
};

solution(n);
