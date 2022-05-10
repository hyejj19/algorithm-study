/*input
ljes=njak
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let str = fs.readFileSync(readFileSyncAddress).toString().trim();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const solution = function (str) {
  let cnt = 0;
  for (const x of croatian) {
    let pos = 
  }
  console.log(str);
};

solution(str);
