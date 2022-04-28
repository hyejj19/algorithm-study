/*input
3 3 6
*/

// 백준 제출용
const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
// const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [a, b, c] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/g).map(v => +v);

let reward = 0;

if (a === b && a === c && b === c) reward = a*1000 + 10000;
else if (a === b && a!== c) reward = a*100 + 1000;
else if (a === c && a!== b) reward = a*100 + 1000;
else if (b === c && b!== a) reward = b*100 + 1000;
else if (a !== b && a !== c && b !== c) reward = Math.max(a,b,c) * 100;

//제출
console.log(reward);