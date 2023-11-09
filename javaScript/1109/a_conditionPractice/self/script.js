// ! 조건문 실습

/**
 * 1. 입력값 검증
 * 사용자로 부터 나이 받아오기
 * 해당 나이 값이 0 미만이거나 200초과일 경우 콘솔창에 'Invalid age.' 출력
 */
// console.log('## 입력값 검증');
// let age = prompt('Please enter your age.');
// if (age < 0 || age > 200) {
//   console.log('Invalid age.');
// }

/**
 * 2. 점수에 따른 등급 부여
 */
// console.log('## 점수에 따른 등급 부여');
// let score = prompt('Please enter your score.');
// if (score >= 0 && score <= 100) {
//   if (score >= 90) {
//     console.log('A');
//   } else if (score >= 80) {
//     console.log('B');
//   } else if (score >= 70) {
//     console.log('C');
//   } else if (score >= 60) {
//     console.log('D');
//   } else {
//     console.log('F');
//   }
// } else {
//   console.log('Invalid score.');
// }

/**
 * 3. 요일에 따른 활동 추천(switch문)
 * 현재 요일에 따라 다른 활동을 추천
 *
 *   ? getDay() 메서드
 *     : 주어진 날짜의 현지 시간 기준 요일을 반환
 *     : 0 - 일요일 ~ 6 - 토요일
 */
// let day = new Date().getDay();
// switch (day) {
//   case 0:
//     console.log(`It's Sunday. Take a rest.`);
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log(`It's a weekday. Let's work hard!`);
//     break;
//   case 6:
//     console.log(`It's Saturday. Enjoy your weekend!`);
//     break;
//   default:
//     console.log('Invalid day.');
// }

/**
 * select 연습
 */
const $html = document.querySelector('html');
const $select = document.querySelector('select');
const $div = document.querySelector('div');

document.body.style.padding = '10px';
$div.style.marginTop = '100px';

const update = function (bgColor, textColor) {
  $html.style.backgroundColor = bgColor;
  $html.style.color = textColor;
}

$select.onchange = function () {
  $select.value === 'black' ? update('black', 'white') : update('white', 'black');
}
