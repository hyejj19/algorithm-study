/* input
20
7
23
19
10
15
25
8
13
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let newArr = [];

for(let i = 0; i<input.length;i++) {
    const arr=input.map((v)=>+v);
    newArr.push(arr[i]);
}

function solution (arr) {
    let answer = arr;
    let sum = arr.reduce((a,b)=>a+b,0);
    for (let i = 0; i <8; i++){
        for (let j = i+1; j<9;j++){
            if((sum-(arr[i]+arr[j]))===100) {
                arr.splice(i,1);
                arr.splice(j,1);
            }
        }
    } console.log(answer);
}

solution(newArr);