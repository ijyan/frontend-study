// ! 반복문 연습 예제

// let fruits = ['apple', 'banana', 'cherry'];
// 배열의 모든 요소를 출력
// console.log('---for문---');
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
//
// console.log('---while문---');
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }
//
// console.log('---do-while문---');
// i = 0;
// do {
//   console.log(fruits[i]);
//   i++;
// } while (i < fruits.length);

/**
 * 사용자로 부터 입력받기
 */
// let userInput;
// do {
//   userInput = prompt('Enter a number greater than 10');
// } while (userInput <= 10);

/**
 * 반복문 실습
 */
const $p = document.querySelector('p');
const $input = document.querySelector('input');
const $btn = document.querySelector('button');

$btn.addEventListener('click', function () {
  // 클릭 시 결과 값 초기화
  $p.textContent = 'Output: ';
  // 사용자가 input에 입력한 값을 제곱근의 소수점을 버린 값 저장
  let num = Math.floor(Math.sqrt(+$input.value));
  // input 초기화
  $input.value = '';
  // input에 포커스
  $input.focus();

  // 1부터 num까지 반복
  for (let i = 1; i <= num; i++) {
    $p.textContent += `${i ** 2} `;
  }
})
