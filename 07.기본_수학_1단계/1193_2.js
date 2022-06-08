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
  // 범위의 스타트 숫자 === 범위 그룹이 가진 분수의 갯수
  let strNum = 0;

  // 범위 내에서 순서에 맞게 연산해줄 숫자
  // n을 분수 갯수만큼 누적하여 빼면, 해당 범위 내에서의 위치가 나온다. (도달 범위에서 -몇 혹은 0)
  while (n > 0) {
    strNum++;
    n -= strNum;
  }

  //마이너스이거나 음수가 되기 때문에 홀수,짝수 여부에 따라 적절히 연산한다.

  //짝수 1/s ~ s/1
  if (strNum % 2 === 0) {
    return `${strNum + n}/${1 + -n}`;
  }
  //홀수 s/1 ~ 1/s
  else {
    return `${1 + -n}/${strNum + n}`;
  }
};

console.log(solution(X));

// 1. 숫자가 위치하는 범위를 파악한다.
// 2. 숫자가 해당 범위 중 어디에 위치하는지 파악한다.
// 3. 위치에 해당하는 분수가 몇인지 ${y}/${z} 로 출력한다.
