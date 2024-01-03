/*
[문제]
- 문자열 s가 주어진다.
- 문자열 s의 모든 모음을 반대로 뒤집어서 리턴
- 모음은 대/소문자로 주어짐
 */

// aeiou AEIOU 에 대한 맵 객체를 하나 만든다.
// s문자열을 돌면서 맵에 해당하는 글자가 있으면, 그 자리를 특수문자로 대체하고
// 해당 글자는 별도 배열로 빼둔다.
// 다시 한 번 s를 반복하면서 특수문자 자리에 배열로 빼둔 부분을 뒤 부터 하나씩 pop 해서 대체시킴

const VOWELS_SET = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
var reverseVowels = function (s) {
  const vowels = [];

  const replacedS = [...s].map((letter) => {
    if (VOWELS_SET.has(letter)) {
      vowels.push(letter);
      return '*';
    }

    return letter;
  });

  const reversed = replacedS.map((letter) => {
    if (letter === '*') return vowels.pop();
    return letter;
  });

  return reversed.join('');
};

console.log(reverseVowels('leetcode'));
