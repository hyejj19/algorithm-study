/*input
The Curious Case of Benjamin Button
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let str = fs.readFileSync(readFileSyncAddress).toString().trim().split(' ');

console.log(str[0] === '' ? 0 : str.length);
