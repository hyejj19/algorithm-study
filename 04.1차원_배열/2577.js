/*input
150
266
427
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g).map(Number)

const nums =input.reduce((a,c) => a*c).toString().split('').map(Number);

for(let i = 0; i < 10; i++){
    let arr = nums.filter((e)=> e === i);
    console.log(arr.length);
}