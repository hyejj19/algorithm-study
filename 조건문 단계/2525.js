/*input
14 30
20
*/

// 백준 제출용
const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
// const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [time, C] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g);

let [H, M] = time.split(/\s/g).map(v => +v);
C = Number(C);

const currT = (H * 60) + M;
const completionT = currT + C;

H = parseInt(completionT / 60);
M = completionT % 60;

if(H > 23) H = H % 24;

//제출
console.log(`${H} ${M}`);