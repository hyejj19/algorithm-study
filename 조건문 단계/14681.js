/*input
12
5
*/

// 백준 제출용
const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
// const readFileSyncAddress = 'input.txt';

const fs = require('fs');
const [x,y] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g).map(v => +v);

let answer;
const X = Math.sign(x);
const Y = Math.sign(y);

if(X == 1 && Y ==1) answer = 1;
else if(X == -1 && Y ==1) answer = 2;
else if(X == -1 && Y == -1) answer = 3;
else if(X == 1 && Y == -1) answer = 4;

console.log(answer);