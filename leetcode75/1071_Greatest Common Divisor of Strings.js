var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';

  const getGcd = (num1, num2) => {
    while (num2 !== 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }

    return num1;
  };

  const gcd = getGcd(str1.length, str2.length);

  return str1.slice(0, gcd);
};

const result = gcdOfStrings('ABCABC', 'ABC');
console.log(result);
