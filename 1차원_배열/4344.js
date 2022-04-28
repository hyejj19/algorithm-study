/*input
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [C, ...testCases] = fs.readFileSync(readFileSyncAddress).toString().trim().replaceAll(/\r/g,'').split(/\n/g);

for(let i = 0; i < C; i++){
    testCases[i] = testCases[i].split(/\s/g).map(Number);
}

//답안 작성
for(let i = 0; i < C; i++){
    let N = testCases[i].shift();
    let sum = 0;
    let cnt = 0;
    for(let j = 0; j < testCases[i].length; j++){
        sum += testCases[i][j];
    }
    let avg = sum / N;
    console.log(avg);
}