// ! 조건문과 반복문의 Best Practice

/**
 * 1. 조건문
 *    ? 비교연산자 사용 시 '==' 대신 '===' 사용을 권장
 *      : JS에서 '==' 연산자는 두 값을 비교할 때 타입 변환을 수행
 *      : '==='연산자는 타입 변환이 없이 엄격하게 비교
 *    ? 불필요한 조건 사용 X
 */
// 불필요한 조건 1
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// 불필요한 조건 2
// bad
if (x === false) {
  // ...
}

// good
if (!x) {
  // ...
}

/**
 * 2. 반복문
 *    ? 배열의 길이를 매 반복마다 계산 X
 *      >> 배열의 길이는 루프 바깥에서 한 번만 계산하는 것이 효율적
 */

// 배열의 길이를 매 반복마다 계산
// bad
let arr = [];
for (let i = 0; i < arr.length; i++) {
  // ...
}

// good
let length = arr.length;
for (let i = 0; i < length; i++) {
  // ...
}
