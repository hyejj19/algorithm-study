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
//console.log(input);

//답안작성 

const m = +(input.shift());
const arr = [];

let S = 0; 
let answer = '';

for(let i = 0; i < m; i++){
    arr.push(input[i].replace(/\n/g, "").split(' '));
    if(!isNaN(arr[i][1])) arr[i][1] = +arr[i][1];

    //n값이 undefined일 때 코드 동작 X, 임의로 넣었다.
    if(arr[i].length === 1) arr[i].push(0);
    let cmd = arr[i][0];
    let n = arr[i][1];
    bitOperator(cmd,n);
    //console.log(i,cmd,n,S.toString(2));
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
            S = (1<<21)-1;
            break;
        case 'empty' :
            S = 0;
            break;

    }
}

//제출
console.log(answer);