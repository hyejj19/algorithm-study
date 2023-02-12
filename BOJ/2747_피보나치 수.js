//백준
//2747
//피보나치

/* input
10
*/

// 백준 제출용
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트용
const readFileSyncAddress = 'input.txt';

const fs = require('fs');
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(/\s/)
  .map(v => +v)
  .pop();

//답안작성

// 풀이 1. 일반적인 풀이 : 시간초과
function normalFibs(n) {
  if (n <= 2) return 1;

  return normalFibs(n - 1) + normalFibs(n - 2);
}

let normalFibsOutput = normalFibs(input);
console.log(normalFibsOutput);

// 풀이 2. 메모이제이션 활용 => 탑다운 방식. 큰 문제를 해결하기 위해 작은 문제를 호출한다.
function fibMemo(n, memo = []) {
  // 만약 memo의 n번째에 연산된 결과가 있다면
  // 추가 연산을 하지 않고 해당 결과를 리턴한다.
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // 재귀의 종료조건
  if (n <= 2) {
    return 1;
  }

  // 만약 memo의 n번째에 연산결과가 없다면 연산하여 memo의 n에 추가한다.
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

  memo[n] = res;

  return res;
}

//*** memo 배열을 바깥 스코프에서 접근하도록 할 수도 있다! */
// let memo = [];
// function fibMemo(n) {
//   if (memo[n] !== undefined) {
//     return memo[n];
//   }

//   if (n <= 2) {
//     return 1;
//   }

//   let res = fibMemo(n - 1) + fibMemo(n - 2);

//   memo[n] = res;

//   return res;
// }

let fibMemoOutput = fibMemo(input);
console.log(fibMemoOutput);

// 풀이 3 : Iteration + Tabulation 반복문을 이용한 풀이
// * Tabulation? 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 제일 작은 값부터 구해 리스트에 작성함으로써 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술 => 메모이제이션과 뭐가 다른거지?
// 메모이제이션과 타뷸레이션 차이는 문제 접근 순서인 것 같다. 큰 문제부터 접근해 작은 문제로 쪼개나가면 메모이제이션, 작은 문제부터 접근해 큰 문제의 해를 구하면 타뷸레이션. => Bottom UP

function fibTab(n) {
  if (n <= 2) return 1;

  // n이 1 그리고 2 일때의 값을 미리 배열에 저장해둔다.
  let fibNum = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    // 직전의 두 값을 더해 현재 값을 구하는 피보나치의 점화식을 3부터 그대로 적용한다.
    // 이렇게 구한 해는 현재 위치의 배열에 저장된다.
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }

  return fibNum[n];
}

let fibTabOutput = fibTab(input);
console.log(fibTabOutput);
