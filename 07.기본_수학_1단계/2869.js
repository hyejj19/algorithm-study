/*input
3
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [up, dn, h] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = function (up, dn, h) {
  let max = (up - dn) * (h / (up - dn)) - dn;
  return Math.ceil(max / (up - dn));
};

console.log(solution(up, dn, h));

// 1. 도달에 필요한 높이 = (하루에 올라갈 수 있는 최대 높이 * 도달에 필요한 day 수 ) - 한 회 내려가는 높이(정상 도달 후 내려가지 않기 때문에 1회 제외한다.)

// 2. 도달에 필요한 높이 / 하루 최대 높이 ===> 도달에 필요한 day 수
