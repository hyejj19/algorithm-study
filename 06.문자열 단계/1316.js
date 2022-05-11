/*input
3
happy
new
year
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [N, ...inputs] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .replaceAll(/\r/g, '')
  .split(/\n/g);

const solution = function (inputs) {
  let cnt = N === 1 && inputs[0].length === 1 ? 1 : 0;
  for (const x of inputs) {
    let cur = 0;
    let pre = 0;
    let flag = 1;
    for (let i = 0; i < x.length; i++) {
      cur = x.indexOf(x[i]);
      pre = x.indexOf(x[i - 1]);
      // 현재 알파벳의 indexOf값과 이전 indexOf값 비교
      // indexOf는 가장 첫번째에 있는 인덱스를 찾아 반환
      if (cur < pre) {
        // 현재 값 < 이전 값 => 앞에 나왔던 문자가 다시 등장
        // 그룹 문자가 아니므로 flag에 falsy 값을 할당하고 break
        flag = 0;
        break;
      }
    }
    // 현재 flag가 1이라면 그룹문자이므로 cnt ++
    if (flag) cnt++;
  }
  return cnt;
};

console.log(solution(inputs));
