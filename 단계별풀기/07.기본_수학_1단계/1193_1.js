/*input
3
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [X] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = function (n) {
  let i = 1; // 현재 범위를 계산할 피연산자
  let range = 0; // 현재 범위
  let strNum = 0; // 분모 or 분자의 시작지점

  // n이 범위에 도달할 때까지 while문 실행
  while (range < n) {
    range += i++;
    strNum = i - 1;
  }

  // 범위에 도달한 분자/분모에서 빼거나 더해줄 값
  // n에서 범위의 첫번째 순서에 해당하는 숫자를 빼면 연산값이 나온다.
  let PM = n - (range - strNum + 1);

  //짝수 1/s ~ s/1
  if (strNum % 2 === 0) {
    return `${1 + PM}/${strNum - PM}`;
  }
  //홀수 s/1 ~ 1/s
  else {
    return `${strNum - PM}/${1 + PM}`;
  }
};

console.log(solution(X));
