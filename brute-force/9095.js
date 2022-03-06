/* input
3
4
7
10
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let newArr = [];

const testCaseNum = +input[0];

for(let i = 1; i<=testCaseNum;i++) {
    const arr=input.map((v)=>+v);
    newArr.push(arr[i]);
}

function solution(t,numbers){
    for(let i =0; i<testCaseNum; i++){
        
    }
}

solution(testCaseNum,newArr);