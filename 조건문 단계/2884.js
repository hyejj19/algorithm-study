// 백준 제출용
const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
// const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [H, M] = fs.readFileSync(readFileSyncAddress).toString().trim().split(/\s/g).map(v => +v);

if(M >= 45) M -= 45;
else if(M < 45 && H !==0) {
    H --;
    M += 60 - 45;
}else if(M < 45 && H ===0){
    H = 23;
    M += 60 - 45;
}

console.log(H, M);