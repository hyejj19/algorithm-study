/*input
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [C, ...testCases] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

for (let i = 0; i < C; i++) {
  testCases[i] = testCases[i].split(/\s/g).map(Number);
}

//답안 작성
let N, sum, avg;
let cnt = 0;

for (let i = 0; i < C; i++) {
  // 각 testCases 의 갯수 N 정의
  N = testCases[i].shift();

  // 각 testCases 의 평균
  sum = testCases[i].reduce((a, c) => a + c, 0);
  avg = sum / N;

  // 각 testCases에서 평균을 넘는 학생의 수
  cnt = 0;
  for (let j = 0; j < N; j++) {
    if (testCases[i][j] > avg) cnt++;
  }

  // 백분율 구하기
  console.log(`${((cnt / N) * 100).toFixed(3)}%`);
}
