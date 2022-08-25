/* input
3 1 
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('').map(function(a) {
    return +a
  });

for(let i = 0; i < input.length; i++) {
    if(input[i]===0) input.splice(i,1);
}

const n = input[0];
const m = input[1];
const visited = new Array(n+1).fill(false);
const array = [];

const solution = function(cnt) {
    if ( cnt === m) {
        console.log(array.join(''));
        return;
    }
    for (let i = 1; i<= n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            array[cnt] = i;
            solution(cnt+1);
            visited[i] = false;
        }
    }
}

solution(0);