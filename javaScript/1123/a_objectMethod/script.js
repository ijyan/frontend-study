/**
 * 자바스크립트 내장 객체(Built-in Objects)
 * : 특정 작업을 수행하거나, 복잡한 기능을 쉽게 구현할 수 있도록 도와주는 메소드와 속성을 제공
 */

// ! 1. Number 객체의 기본 메소드

/**
 * ? toFixed()
 *  : 숫자 N번째 자릿수까지 출력
 *  : 소수점 이하 몇 자리까지만 출력하고 싶을 때 사용
 *  : 반올림된 값을 문자열로 반환
 *
 *  > Syntax
 *    numObj.toFixed([digits]);
 */
let num = 123.34567;
console.log(num.toFixed(3)); // 123.346

/**
 * ? Number.isNaN()
 *   : 주어진 값이 NaN인지 판별한다.
 *   : 기존에 존재한 isNaN() 함수의 더 엄격한 버전이다.
 *
 * > Syntax
 *   Number.isNaN(value);
 */
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }

  if (isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F')); // NaN
console.log(typeOfNaN(NaN)); // Number NaN

/**
 * ? Infinity
 *   : Infinity는 양의 무한대를 의미한다.
 *   : -Infinity는 음의 무한대를 의미한다.
 * ? Infinity 인지 체크하는 법: Number.isFinite()
 *   : 주어진 값이 유한수인지 판별
 *   : 음수를 0으로 나누면 -infinity가 되어 num === infinity로 판단하는 것보다 isInfinite() 함수를 사용하는 것이 적절합니다.
 *   > Syntax
 *     Number.isFinite(value);
 */
console.log(Number.isFinite(1 / 0)); // false
console.log(Number.isFinite(10 / 5)); // true
console.log(Number.isFinite(0 / 0)); // false




// ! 2. String 객체의 기본 메소드

/**
 * ? trim()
 *   : 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈 등) 없애는 메소드
 */
let string = `
Hi
Nice to meet you!


`;
console.log(string.trim());
console.log('      안녕하세요'.trim()); // '안녕하세요'
console.log('hi             '.trim()); // 'hi'

/**
 * ? split()
 *   : 문자열을 특정 기호로 자르는 메소드
 *   : 주어진 문자열을 `separator`마다 끊은 부분 문자열을 담은 `Array` 반환
 *
 *   > Syntax
 *     - split();
 *     - split(separator);
 *     - split(separator, linit);
 */
let data = `
일자, 달러, 엔, 유로
01, 1141.8, 1097.46, 1262.37
02, 1141.8, 1097.46, 1262.37
03, 1141.8, 1097.46, 1262.37
04, 1141.8, 1097.46, 1262.37
`;
// 공백 제거 후 줄바꿈으로 나눔
data = data.trim().split('\n');
console.log(data); // ['일자, 달러, 엔, 유로', '01, 1141.8, 1097.46, 1262.37', '02, 1141.8, 1097.46, 1262.37', '03, 1141.8, 1097.46, 1262.37', '04, 1141.8, 1097.46, 1262.37']

data = data.map((line) => {
  return line.split(', ');
});

console.log(data);

/**
 * ? String.length
 *   : 문자열의 길이를 나타낸다.
 *   : 공백도 문자열로 인식한다.
 */

console.log('Mozilla   '.length); // 10

/**
 * ? toUpperCase()
 *   : 문자열을 대문자로 변환해 반환합니다.
 *   > Syntax
 *     str.toUpperCase();
 *
 * ? toLowerCase()
 *   : 문자열을 소문자로 변환해 반환합니다.
 *   > Syntax
 *     str.toLowerCase();
 */
console.log('string'.toUpperCase()); // STRING
console.log('STRING'.toLowerCase()); // string
