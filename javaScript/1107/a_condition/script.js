/**
 * # 자바스크립트 구성 요소
 *   - 조건문, 반복문, 함수, 이벤트 등
 */

/**
 * ! 조건문
 *   : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식
 *
 *   - 종류
 *     : if문, else if문, else문, switch문
 */

/**
 * if 문
 * : 가장 기본적인 조건문: 특정 조건이 참(true)이면 코드 블럭이 실행
 * : 조건이 거짓(false)면 코드 블럭은 무시
 */
let number = 10;

if (number > 0) {
  console.log('The number is positive');
}

/**
 * if else 문
 * else문은 if문과 함께 사용, if의 조건이 모두 거짓(false)일 경우 else의 코드 블록이 실행
 */
number = -10;
if (number > 0) {
  console.log('The number is positive');
} else {
  console.log('The number is negative');
}

/**
 * if-else문의 코드 축약
 * 실행될 코드 블럭이 한 줄일 경우 코드 축약이 가능
 */
if (number > 0) console.log('The number is positive');
else console.log('The number is negative');

let shoppingDone = false;
let childAllowance;

if (shoppingDone) {
  // 쇼핑을 완료 한 경우: 용돈을 10
  childAllowance = 10;
} else {
  // 쇼핑을 완료 하지 않은 경우: 용돈을 5
  childAllowance = 5;
}

/**
 * else if 문
 * : if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조
 */
number = 0;
if (number > 0) {
  console.log('The number is positive');
} else if (number < 0) {
  console.log('The number is negative');
} else {
  console.log('The number is zero');
}

let age = 12;
if (age < 13) {
  console.log('어린이 입니다.');
} else if (age >= 13 && age < 20) {
  console.log('청소년 입니다.');
} else {
  console.log('성인입니다.');
}

/**
 * 조건식에 true와 false값과의 비교(===, !==)
 *
 * boolean 타입에서 false값으로 인식되는 값
 * : false, 0, null, undefined, ''
 * 위의 값을 제외하고는 true 값을 반환하기 때문에 변수가 참인지 또는 값이 존재하는지를 테스트하기 위해서 변수 이름 그 자체를 사용할 수 있음.
 */

let cheese = 'Cheddar';
if (cheese) {
  console.log('Cheese avilable for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today');
}

/**
 * switch문
 * : 여러가지 경우 중 하나를 선택하는데 사용
 * : 표현식의 값을 확인하고 해당 값과 일치하는 case 문의 코드 블록을 실행
 */

let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'cherry':
    console.log('I am a cherry.');
  default:
    console.log(`I don't know.`);
}

// 날씨 예보 예제 작성하기
const $select = document.querySelector('select');
const $p = document.querySelector('p');

$select.onchange = setWeather;

function setWeather() {
  const choice = $select.value;
  // if (choice === 'sunny') {
  //   $p.textContent = `It's sunny day.`;
  // } else if (choice === 'rainy') {
  //   $p.textContent = `It's rainy day.`;
  // } else if (choice === 'snowing') {
  //   $p.textContent = `It's snowing day.`;
  // } else if (choice === 'overcast') {
  //   $p.textContent = `It's overcast day.`;
  // } else {
  //   $p.textContent = `Please select weather.`;
  // }
  switch (choice) {
    case 'sunny':
      $p.textContent = `It's sunny day.`;
      break;
    case 'rainy':
      $p.textContent = `It's rainy day.`;
      break;
    case 'snowing':
      $p.textContent = `It's snowing day.`;
      break;
    case 'overcast':
      $p.textContent = `It's overcast day.`;
      break;
    default:
      $p.textContent = `Please select weather.`;
      break;
  }
}

/**
 * 삼항(조건)연산자
 * 조건에 따라 값을 반환하는 JS에서 세 개의 피연산자를 가지는 유일한 연산자
 *
 * 문법
 * : 조건 ? 표현식1 : 표현식2
 */
number = 15;
let message = number > 10 ? 'The number is greather than 10' : 'The number is not greather than 10';
console.log(message);

let score = 85;
let result = score >= 50 ? 'Passed' : 'Failed';
console.log(result);

/**
 * 중첩된 if-else문과 삼항 연산자의 비교
 *
 * if (조건1) {
 *    조건 1이 참일 때 실행될 코드
 *    if (조건2) {
 *      조건1과 조건2 모두 참일 때 실행될 코드
 *    } else {
 *      조건1은 참이지만, 조건2는 거짓일 때 실행 될 코드
 *    }
 * } else {
 *   조건1이 거짓일 때 실행될 코드
 * }
 */

// 50점 이상일 경우 시험에서 통과
// 90점 이상일 경우 A
// 80점 이상일 경우 B
// 70점 이상일 경우 C
// 그 외 D

// 50점 미만일 경우 불합격 재시험 치뤄야 함
score = 35;

if (score >= 50) {
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else if (score >= 70) {
    console.log('C');
  } else {
    console.log('D');
  }
} else {
  console.log('Failed');
}

// 위 중첩 if문을 삼항 연산자로 변환
score = 80;
let grade =
  score >= 50 ?
    score >= 90 ? 'A' :
      score >= 80 ? 'B' :
        score >= 70 ? 'C' : 'D' : 'Failed';
console.log(grade);

// 출력 확인
true || console.log('A'); // A
true && console.log('A'); // 출력X
// OR 연산자
false && false === false;
false && true === true;
true && false === true;
true && true === true;

// AND 연산자
false && false === false;
false && true === false;
true && false === false;
true && true === true;
