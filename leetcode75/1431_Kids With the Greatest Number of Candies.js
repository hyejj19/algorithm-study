var kidsWithCandies = function (candies, extraCandies) {
  // 방법 1.
  // 반복문 돌며 각각 더하고, 나머지 값과 비교하는 것.
  // O(n)^2 의 시간 복잡도를 갖는다.

  // 방법 2.
  // 전체 배열에서 extraCandies 를 받기 전 최대값을 변수에 저장
  // 배열을 돌며 extraCandies 를 더하고 그 값보다 크면 true, 아니라면 false

  const max = Math.max(...candies);
  const result = candies.map((child) => {
    return child + extraCandies >= max;
  });

  return result;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
