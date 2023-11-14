// ! 매개변수(parameter)

/**
 * ? 가변 매개변수
 *   : 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
 *   : 함수를 호출할 때 인자의 수가 정해져 잇지 않고, 함수 내부에서 이를 유동적으로 처리
 */

/**
 * ? 나머지 매개변수(Rest Parameter)
 *   : JS에서는 나머지 매개변수를 사용하여 가변 매개변수를 구현
 *   : 함수의 매개변수에 '...'을 사용하여 정의
 *   : 함수에 전달된 여분의 인자들을 배열로 받음.
 */

// sp
function exampleFunction(...args) {
  console.log(args);
}

exampleFunction(); // []

function createArray(...elements) {
  return elements;
}
console.log(createArray(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

// Math.min()
function findMin(...numbers) {
  return Math.min(...numbers);
}

console.log(findMin(54, 23, 10, 77));

/**
 * 나머지 매개변수와 일반 매개변수의 조함
 * @param firstParam 첫 번째 인자
 * @param restOfParams 나머지 인자들을 배열의 형태로 받음
 */

function combinedExample(firstParam, ...restOfParams) {
  console.log(`첫 번째 매개변수: ${firstParam}, 타입: ${typeof firstParam}`);
  console.log(`나머지 매개변수의 타입은 배열입니까? ${Array.isArray(restOfParams)}`);
  console.log(restOfParams);
}

console.log(combinedExample('Hello', 42, true, null));

/**
 * ? 기본 매개변수
 *   : 함수에 인자를 전달하지 않았을 때 사용되는 기본값을 정의
 *   : 함수의 매개변수가 undefined 경우에도 함수가 정상적으로 동작하도록 구현
 */

// 기본 매개변수 사용: 함수를 정의할 때 매개변수 뒤에 '=' 연산자를 이용하여 기본값을 할당

function isLeapYear(year = new Date().getFullYear()) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

console.log(isLeapYear()); // 올해가 윤년인지 확인
console.log(isLeapYear(2020)); // 2020년이 윤년인지 확인

// 급여 계산 함수
function calculatePay(rate, hours = 40) {
  return rate * hours;
}

console.log(calculatePay(10000));
