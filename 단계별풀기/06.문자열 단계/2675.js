/*input
2
3 ABC
5 /HTP
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

const repeat = function (arr) {
  const [R, S] = arr.split(' ');
  let answer = '';
  for (let i = 0; i < S.length; i++) {
    answer += `${S[i].repeat(R)}`;
  }
  return answer;
};

for (let i = 0; i < T; i++) {
  console.log(repeat(testCases[i]));
}
