var canPlaceFlowers = function (flowerbed, n) {
  // 흠 뭔가 0의 갯수와 n 을 나누거나 나누어 떨어진 값으로 해결할 수 있을 것 같은데...
  // 일단 유효하게 심을 수 있는 자리의 갯수를 산출해서 이게 n보다 같거나 크면 true 를 리턴할 수 있겠다.
  // 그럼 유효하게 심을 수 있는 자리는 어떻게 구하느냐?
  // 반복문에서 각 자리의 양 옆에 1이 없으면 유효, 아니라면 유효하지 않은 값
  // 그런데 이미 꽃 하나를 심고 나면 다음 자리가 유효하지 않은 자리가 될 수 있으므로...
  // 그냥 자리 남은데에 하나씩 심으면서 n을 감소시키고, n 이 0보다 클 경우 false 를 리턴하는 방법
  // -> 흠 근데 통과를 하지 못하는 20개의 TC 가 존재한다... 어떤 예외가 있을까..?
  // => 첫번째 칸 혹은 마지막 칸도 심을 수 있는데 그 이전, 이후 값을 모두 확인해주고 있어서 그렇다...

  let flowerLeft = n;

  flowerbed.forEach((plot, i) => {
    if (
      plot === 0 &&
      (!flowerbed[i - 1] || flowerbed[i - 1] === 0) &&
      (!flowerbed[i + 1] || flowerbed[i + 1] === 0) &&
      n > 0
    ) {
      flowerbed[i] = 1;
      flowerLeft--;
    }
  });

  return flowerLeft > 0 ? false : true;
};

const flowerbed = [0, 0, 1, 0, 1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n));

var canPlaceFlowers2 = function (flowerbed, n) {
  let count = 0;
  let pre = -1;
  let next = 1;

  for (let i = 0; i < flowerbed.length; i++, pre++, next++) {
    if (
      getValue(flowerbed, pre) +
        getValue(flowerbed, i) +
        getValue(flowerbed, next) ==
      0
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};

var getValue = function (flowerbed, i) {
  if (i < 0 || i >= flowerbed.length) {
    return 0;
  }
  return flowerbed[i];
};
