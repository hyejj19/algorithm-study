// /*input
// 13
// */

// // 백준 제출용
// // const readFileSyncAddress = '/dev/stdin';

// // VSC 테스트용
// const readFileSyncAddress = 'input.txt';

// const fs = require('fs');
// let [N] = fs
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .trim()
//   .split(' ')
//   .map((v) => +v);

// const solution = function (n) {
//   if (n >= 1 && n <= 6) return 2;
//   let k = 1;
//   let j = 2;
//   let f = k;
//   for (let i = 1; i < n; i++) {
//     if (n >= 6 * f && n <= 6 * k) return i + 1;
//     f = k;
//     k += j;
//     j++;
//   }
// };

// console.log(solution(N));

/*input
13
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
let [N] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const solution = function (n) {
  let i = 1;
  let range = 1;

  // n이 범위를 넘어가면 도달한 것.
  while (range < n) {
    //range : 해당 회차까지 접근가능한 수의 범위, 이전 수 + 6의 배수.
    range += 6 * i;
    //n이 range까지 도달하기 위한 횟수
    i++;
  }
  return i;
};

console.log(solution(N));

//문제를 풀기 위한 시행착오
//범위가 6 * i, i는 1, 3, 6 ... 이런식으로 회차마다 증가한다는 것 까지는 파악할 수 있었다.
//n이 몇번만에 도달했는지 알기 위해 현재 i와 이전 i를 비교할 수 있도록 변수를 따로 지정했는데, 문제는 현재 i와 이전 i의 갭이 회차에 따라 다르다는 것이다. (이전에 i가 1이었다면 다음에는 3, 그다음에는 6 이런식으로 증가하기 때문에...)
//다른 풀이를 찾아보니, 범위를 6*3 ~ 6*6 이런식으로 지정해서 계산하지 않고, 계속해서 누적해주고, 범위를 넘어설 때까지 카운트를 세어서 계산하는 방법이 있었다.
//이런 식으로 생각을 바꿔서 문제에 접근하는 것도 필요하다... 너무 문과적으로 절차에 맞게 접근하려는 방식때문에 사고가 틀에 갖히는 것 같다.
