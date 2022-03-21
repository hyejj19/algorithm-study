//백준 
//11723

/* input
26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1
*/

// 백준 제출용
//const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
const input = fs.readFileSync(readFileSyncAddress).toString().split('\n');

//답안작성 

const m = +input[0];
const arr = [];

for(let i = 0; i <= m; i++){
    arr.push(input[i].replace(/\n/g, "").split(' '));
    if(!isNaN(arr[i][1])) arr[i][1] = +arr[i][1];
}
arr.shift();

let S = 0; 
let answer = '';

for(let i = 0; i < m; i++){
    let cmd = arr[i][0];
    let n = arr[i][1];
    bitOperator(cmd,n);
    console.log(i,cmd,n,S.toString(2));
}

function bitOperator(cmd,n){
    switch(cmd){
        case 'check' :
            if(S&(1<<n)) answer += `1\n`;
            else answer += `0\n`;
            break;
        case 'add' :
            S |= (1<<n);
            break;
        case 'remove' :
            S &= ~(1<<n);
            break;
        case 'toggle' :
            S ^= (1<<n);
            break;
        case 'all' :
            S = ((1<<20)-1);
            break;
        case 'empty' :
            S = 0;
            break;
    }
}