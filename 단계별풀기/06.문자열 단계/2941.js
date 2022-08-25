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
  for (let x of croatian) str = str.replaceAll(x, 'x');

  return str.length;
};

console.log(solution(str));

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < croatian.length; j++) {
//     if (str.includes(croatian[i])) {
//       str = str - str.substring(str.indexOf(croatian[i]), croatian.length);
//       cnt++;
//     }
//   }
// }
