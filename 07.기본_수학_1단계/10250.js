/*input
20
1 1 1
1 5 4
1 9 4
1 20 20
2 2 4
2 4 4
2 10 4
6 12 6
6 12 7
6 12 10
6 12 12
6 12 55
10 10 91
10 10 99
30 50 31
30 50 72
99 99 1
99 99 99
99 99 100
99 99 9800
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [T, ...testCases] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);
T = Number(T);

const solution = function (T, testCases) {
  for (let i = 0; i < T; i++) {
    let [H, W, N] = testCases[i].split(/\s/).map((v) => +v);
    let floor = N % H === 0 ? H : N % H || 1;
    let room = Math.ceil(N / H) || 1;
    console.log(
      `${(floor = room.toString().length === 1 ? `${floor}0` : floor)}${room}`
    );
  }
};

solution(T, testCases);
