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
  const soinsu = [];
  while (true) {
    // n이 소인수로 나누어 떨어지는 동안 계속한다.
    if (n % sosu === 0) {
      // n은 소인수로 나눈 몫
      n /= sosu;
      // 나누어 떨어졌으므로 소인수이다.
      soinsu.push(sosu);
      // 소수는 다시 1로 리셋
      sosu = 1;
    }
    // 나누어 떨어지지 않으면, 나누어 떨어질 때 까지 sosu를 계속 증감한다.
    sosu++;
    // 소수보다 소수로 나눈 몫이 작아지면 break
    if (sosu > n) break;
  }
  return soinsu.join('\n');
};

console.log(solution(n));
