// 어떤 수가 주어졌을 때 배열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾아라 (pg.97)
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
console.log(answer);
