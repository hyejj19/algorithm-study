//백준 1759
//암호만들기

/* input
4 6
a t c i s w
*/

// 백준 제출용
//const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

let fs = require('fs');
let input = fs.readFileSync(readFileSyncAddress).toString().split('\n');

for(let i = 0; i < input.length; i++) {
    if(input[i]===0) input.splice(i,1);
}

let n = +input[0][0];
let arr = [...input[1].replace(/(\s*)/g, "")];

////////************////////

let result = '';

const 모음 = ['a','e','i','o','u']
const 모음암호 = [];

for(let i=0; i<arr.length; i++){
    if(모음.includes(arr[i])) {
        모음암호.push(arr[i]);
        arr.splice(i,1);
    }
}

function DFS(L,s){
    let tmp = '';
    if(L===n){

    }
    else{
        for(let i = s; i < arr.length; i++){

        }
    }
}

result += `${DFS(0,0)}\n`;

//제출
console.log(result);

