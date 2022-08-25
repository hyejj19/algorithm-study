// 버블정렬

/*
이웃한 두 수 끼리 비교하여 뒤에가 작으면 바꿔주는 것(오름차순)
- arr[j] > arr[j+1] : 바꿔준다.
- i는 arr.length -1 만큼만 돌면 된다. 
- j는 length - 1 -1 만큼만 돌면 되는 것. 마지막 요소와 정렬이 완료된 요소는 돌지 않아도 되기 때문에. 
- i가 0번째일 때 마지막 요소가 제일 큰 요소가 될 것임. 

*/

const bubbleSort = function (arr) {
  // 바깥쪽 반복문에서 마지막 요소 직전까지 반복한다. j를 기준으로 j + 1과 비교하기 때문에 길이가 반복 횟수가 줄어도 상관없다.
  for (let i = 0; i < arr.length - 1; i++) {
    // 안쪽 for문에서 이미 정렬된 부분은 무시하기 위해 i만큼 뺀 길이를 반복한다.
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 오름차순 정렬에서 앞쪽 요소가 더 크다면 SWAP 한다.
      if (arr[j] > arr[j + 1]) {
        // let tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
        // 여기서 매번 비교하여 바꿔주기 때문에 변경 횟수가 잦아서 성능이 뛰어나진 않다.
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

let output = bubbleSort([2, 1, 3, 4, 6, 5]);
console.log(output); // --> [1, 2, 3]
