// ! 자바스크립트 콜백 함수 - 화살표 함수

/**
 * 기본함수와 화살표 함수의 차이
 * : this 키워드가 지칭하는 대상이 다르다
 * : 콜백함수에 활용하는 function() {}의 간단한 사용
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = array.map(v => v ** 2);
console.log(result);

// ? 배열의 메소드와 화살표 함수
array
  .filter(v => v % 2 === 0)
  .map(el => el * el)
  .forEach(clg => console.log(clg));

/**
 * ! 타이머 함수
 *   : 특정시간 | 특정 시간 이후에 콜백 함수를 호출
 *   ? 타이머 함수의 시간 단위: 밀리초(1000ms === 1s)
 */

 // ? 1. setTimeout(함수, 시간)
 //     : 특정 시간 후에 함수를 한 번 호출

setTimeout(() => {
  console.log('3초 후에 실행됩니다.');
}, 3000);

// ? 2. setInterval(함수, 시간)
//      : 특정 시간마다 함수를 호출
let id;
let cnt = 1;
id = setInterval(() => {
  console.log(`1초마다 실행(${cnt}번 째)`);
  cnt++;
}, 1000);

// ? 타이머를 종료하고 싶을 때
// clearTimeout(), clearInterval() 사용
// 1. clearTimeout(타이머_ID): setTimeout() 함수로 설정된 타이머 제거
// 2. clearInterval(타이머_ID): setInterval()함수로 설정된 타이머 제거
// >> 티이머_ID: setTimeout() 함수와 setInterval()의 리턴값

setTimeout(() => {
  console.log('5초 후에 타이머를 종료');
  clearInterval(id);
}, 5000)
