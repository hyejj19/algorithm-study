//백준
//11726
//2xn 타일링

/* input
10
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [n, arr] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

n = +n;
const rocks = arr.split(' ').map(rock => +rock);

//답안작성
const solution = function (n, rocks) {
  let ltMax = 0;
  let rtMax = 0;
  let ltMin = 0;
  let rtMin = 0;

  let goldCnt = 1;
  let prev = 0;

  for (let rock of rocks) {
    // 연속되는 경우 금칠
    if (rock === prev) goldCnt++;
    // 연속되지 않는 경우
    else {
      // 이전까지 금칠이 왼쪽인 경우
      if (prev === 1 && goldCnt >= 2) {
        if (ltMax < goldCnt) ltMax = goldCnt;
        if (ltMin > goldCnt) ltMin = goldCnt;
      }
      // 이전까지 금칠이 오른쪽인 경우
      else if (prev === 2 && goldCnt >= 2) {
        if (rtMax < goldCnt) rtMax = goldCnt;
        if (rtMin > goldCnt) rtMin = goldCnt;
      }
      goldCnt = 1;
    }
    prev = rock;
  }
  const compare1 = Math.abs(ltMax - rtMin);
  const compare2 = Math.abs(ltMin - rtMax);
  let answer = compare1 > compare2 ? compare1 : compare2;

  return answer ? answer : 1;
};

const output = solution(n, rocks);
console.log(output);
