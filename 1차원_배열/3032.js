/*input
39
40
41
42
43
44
82
83
84
85
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [...input] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\n/g).map(Number)

const B = 42;
let arr = [];

for(let i = 0; i < input.length; i++){
    let A = input[i];
    arr.push(A%B);
}

let newArr = [...new Set(arr)];

console.log(newArr.length);