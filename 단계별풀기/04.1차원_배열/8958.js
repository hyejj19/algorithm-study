/*input
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin'; 

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [N, ...score] = fs.readFileSync(readFileSyncAddress).toString().trim().replaceAll(/\r/g,'').split(/\n/g);


for(let i = 0; i < N; i++){
    let cnt = 0;
    let tmp = 0;
    for(let j = 0; j < score[i].length; j++){
        if(score[i][j] === 'O'){
            tmp ++;
            cnt += tmp;
        } 
        else if(score[i][j] === 'O' && score[i][j] === score[i][j-1]) {
            tmp ++;
            cnt += tmp;
        } else if(score[i][j] === 'X')tmp = 0;
    };
    console.log(cnt);
    cnt  = 0;
}