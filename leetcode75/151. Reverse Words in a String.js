/*
 [문제]
 - 문자열 s가 주어졌을 때, 단어들의 순서를 뒤집어라
 - 단어들은 공백을 기준으로 나뉘고, 공백을 기점으로 뒤집어야함
 - s가 주어질 때 단어 사이에 여러개의 공백이 있을 수 있는데, 
 - 앞,뒤 공백도 다 없애고 단어는 무조건 하나의 공백으로만 구분지어야 함
  */

var reverseWords = function reverseWords(s) {
  // 단어를 돌면서 공백이 나오기 직전까지 단어를 임시 저장해두었다가
  // 공백이 나오는 시점에 해당 문자열을 배열에 push
  // 그런담에 순서를 뒤집어서 join 하면 될 것 같음

  const words = [];
  let temp = '';

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const isCurrSpace = curr === ' ';

    if (!isCurrSpace) {
      temp += s[i];
    }

    if ((isCurrSpace || i === s.length - 1) && temp) {
      words.push(temp);
      temp = '';
    }
  }

  return words.reverse().join(' ');
};

console.log(reverseWords('a good   example'));

var thisIsBetter = function (s) {
  let words = s
    .trim()
    .split(/\s+/)
    .filter((word) => word !== '');
  const reverseword = words.reverse();
  return reverseword.join(' ');
};
