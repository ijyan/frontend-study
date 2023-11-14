/**
 * ! 함수와 조건문
 * 윤년(Leap Year) 확인 함수
 * 윤년: 4년에 한 번씩 2월이 29일까지 있는 해
 *
 * 4로 나누어 떨어지고 100으로 나누어 떨어지지 않거나, 400으로 나누어 떨어지면 윤년
 */
function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2023));

/**
 * ! 함수와 반복문 사용
 * A부터 B까지 더하는 함수
 *
 * 시작값(A)부터 끝 값(B)까지 계산하여 반환
 */

function sumFromAtoB(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumFromAtoB(1, 10)); // 55;

/**
 * ! 최솟값을 구하는 함수
 *   : 여러 숫자 중에서 가장 작은 값을 찾는 방법
 */

function findMinValue(array) {
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }
  return minValue;
}

console.log(findMinValue([10, 4, 2, 3, 4]));
