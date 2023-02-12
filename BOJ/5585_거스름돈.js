//백준
//5585
//거스름돈

/* input
380
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s/)
  .map(v => +v)
  .pop();

//답안작성

function solution(input) {
  let change = 1000 - input;
  const coins = [500, 100, 50, 10, 5, 1];
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    if (change === 0) break;

    // change를 갱신하기 전에 현재 단위의 동전 사용 갯수를 카운트에 누적한다.
    count += parseInt(change / coins[i]);

    // 현재 change를 현재 coin으로 나눈 나머지를 구하게 되면
    // 현재 단위로 거슬러줄 수 있는 금액을 모두 거슬러 주고
    // 다음 더 작은 단위의 거스름돈을 사용하게 된다.
    change %= coins[i];
  }
  console.log(count);
}

solution(1);
