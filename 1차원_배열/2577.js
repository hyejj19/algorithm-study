/*input
1 1
2 3
3 4
9 8
5 2
0 0
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [a, b, c] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g).map(Number);

const [...nums] = (a*b*c).toString().split('').map(Number);

