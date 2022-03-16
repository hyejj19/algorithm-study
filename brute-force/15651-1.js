// N and M (3)

//input 3 3

// For submit

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
//const input = [3, 3];
const N = input.shift();
const M = input.shift();
const output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(i + 1);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);
console.log(result.trim());