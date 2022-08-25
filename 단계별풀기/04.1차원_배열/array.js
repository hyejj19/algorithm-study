/* 어떤 수가 주어졌을 때 배열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾아라 (pg.97)
function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) return [i, j];
    }
  }
  return -1;
}

// const answer = findSum([1, 2, 3, 4, 5], 9);
// console.log(answer);

function findSumBetter(arr, weight) {
  let hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    // for문이 하나씩 돌면서 i가 0일 때, currElement는 i+1이 된다.
    let currElement = arr[i],
      difference = weight - currElement;

    if (hashtable[currElement] !== undefined) {
      return [i, hashtable[currElement]];
    } else {
      hashtable[difference] = i;
    }
  }
  return -1;
}

const answer = findSum([3, 4, 1, 5, 8], 9);
// console.log(answer); */

// slice 복습
/*
function arraySlice(arr, strIdx, endIdx) {
  // 시작지점과 끝지점이 정해지지 않으면 arr을 그대로 리턴 (얕은 복사)
  if (!strIdx && !endIdx) return arr;

  // 끝지점이 없을 경우, 끝지점은 배열의 길이
  if (!endIdx) endIdx = arr.length;

  const partArr = [];

  // 부분 배열에 시작지점부터 끝지점까지 요소를 하나씩 push
  for (let i = strIdx; i < endIdx; i++) {
    partArr.push(arr[i]);
  }

  return partArr;
}
console.log(arraySlice([1, 2, 3, 4], 1, 2)); //2*/
// 배열이 n개의 항목 모두에 접근해야 하기 때문에 시간 복잡도가 O(n)
// 배열 복사시 n개의 항목을 보관해야 하므로 공간 복잡도도 O(n)

function medianOfArray(arr) {
  const len = arr.length;

  return len % 2 === 1
    ? arr[Math.floor(len / 2)] //홀수
    : (arr[len / 2] + arr[len / 2 - 1]) / 2; //짝수
}
console.log(medianOfArray([1, 2, 3, 4]));

function medianTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) return -1;
  if (pos === 1) return (arr1[0] + arr2[0]) / 2;
  if (pos === 2) return;
}
