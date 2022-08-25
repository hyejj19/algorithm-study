//백준 
//2003
//수들의 합2

/* input
4 2
1 1 1 1
*/

// 백준 제출용
const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
// const readFileSyncAddress = 'input.txt';

const fs = require('fs');
const [N, M, ...nums] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/).map(v => +v);

for(let i = 0; i < N; i++){
    nums.push(+tmp2[i]);
}

//답안작성 

let answer = 0;
for (let rt = 0; rt < N; rt++){
    let sum = nums[rt];
    let lt = rt;
    while (sum < M && lt < N-1) {
        lt++;
        sum += nums[lt];
        console.log(sum);
    }
    if (sum === M) answer ++;
}
    
//제출
console.log(answer);