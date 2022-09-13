/*
[문제] 아나그램 - Hash Algorithm

Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.

예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면
A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 
즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.

길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세
요. 아나그램 판별시 대소문자가 구분됩니다.

[입력]
두 개의 문자열

[출력]
두 문자열이 아나그램이면 'YES' 아니면 'NO' 를 출력한다.
*/

const str1 = 'abaCC';
const str2 = 'Caaab';

// 해쉬맵 생성 함수
function getHashMap(str) {
  let hash = new Map();

  for (let key of str) {
    if (hash.has(key)) {
      let value = hash.get(key) + 1;
      hash.set(key, value);
    } else {
      hash.set(key, 1);
    }
  }
  return hash;
}

function solution1(str1, str2) {
  // 두 문자열에 대한 맵을 각각 변수에 할당
  let str1Hash = getHashMap(str1);
  let str2Hash = getHashMap(str2);

  // 길이가 같은 문자열이기 때문에 어느 한 쪽을 기준으로 판단해도 된다.
  // 첫번째 문자열의 key를 기준으로 반복을 돌아 해당 키가 str2에 존재하는지
  // 그리고 존재하는 경우 값이 같은지를 확인해 다른 경우 No를 리턴하고 끝낸다.
  for (let key of str1Hash.keys()) {
    if (!str2Hash.has(key) || str1Hash.get(key) !== str2Hash.get(key)) return 'NO';
  }

  // No가 아닌 경우 Yes 이므로 리턴한다.
  return 'YES';
}

const result1 = solution1(str1, str2);
console.log(result1);
