// 자바스크립트 함수

/**
 * ! 함수의 정의
 *   : 특정 동작을 수행하는 코드의 묶음(집합)
 *   : A-> B -> C 동작을 함수 'ABC'로 구현
 *   : 다른 위치(코드)에서 해당 절차 즉, ABC를 다시 사용 가능
 *   : 코드의 재사용성과 가독성 향상 그리고 디버깅을 용이하게 함.
 */

/**
 * ! 함수의 사용 용도
 *
 * 1. 코드 재사용
 *    : 같은 코드를 여러 번 작성하는 대신 함수를 정의하고
 *    : 필요할 때마다 호출하여 사용
 *
 *  2. 모듈화 및 추상화
 *     : 복잡한 작업을 수행하는 코드를 함수로 분리
 *     : 각 함수가 수행하는 작업에 집중
 *
 *  3. 이벤트 처리
 *     : 웹 페이지에서 발생하는 다양한 이벤트(버튼 클릭, 폼 제출 등)을 처리하는데 사용
 */
// ? 코드 재사용 예제
const multiply = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply(100, 9));

// ? 모듈화 및 추상화 예제
// 두 점의 거리를 계산하는 자바스크립트 함수
function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx ** 2 + dy ** 2);
}

// ? 이벤트 처리 예제
const buttonEvent = function () {
  console.log('Button was clicked!');
}
document.querySelector('button').addEventListener('click', buttonEvent);

/**
 * ! 함수 정의 방법 (함수 생성)
 *   1. 함수 선언식(Function Declaration)
 *      : 가장 기본적인 함수 정의 방법
 *      : function 키워드로 시작, 함수의 이름이 필수적으로 명시
 *      : 호이스팅(즉, 함수가 정의되기 전에 호출 가능)
 *   2. 함수 표현식(Function Expression)
 *      : 함수를 변수에 할당하는 방식
 *      : 함수에 이름을 붙일 수도 있고, 붙이지 않을 수도 있다.
 *      : 호이스팅 되지 X (정의된 후에만 호출 가능)
 *      : 정의된 함수는 변수의 스코프 내에서만 사용 가능
 *   3. 화살표 함수(Arrow Function)
 *      : ES6에서 되입된 함수 정의 방식
 *      : 기존의 function 키워드를 화살표로 대체하여, 간결한 함수를 작성
 *      : 항상 익명함수로 사용
 *      : 'this'가 일반 함수와 다르게 바인딩 됨.
 */

// ? 함수 선언식 예제
sayHello(); // 호이스팅 가능

// function 함수명 () {}
function sayHello() {
  console.log('함수 선언식');
}

sayHello();

// ? 함수 표현식 예제
// greet(); // error: 호이스팅X
let greet = function () {
  console.log('함수 표현식');
};
greet();

// ? 화살표 함수 예제
const greeting = (text) => console.log(`Hello ${text}.`);
greeting('홍길동');

const add = (a, b) => a + b;
console.log(add(4, 2));

/**
 * ! 함수 호촐하기
 *   : 함수를 정의한 후에는 함수명과 괄호를 사용하여 함수 호출 가능
 */

/**
 * ! 함수의 매개변수(parameter)
 *   : 함수를 정의하고 호출하는 과정에서 함수에 데이터 전달 방식
 *   : 함수 호출 시 괄호 안에 인수(argument)를 넣어서 전달, 해당 인수는 함수 내부로 전달되어 매개변수(parameter)라는 이름으로 사용
 *
 *   ? 인수(argument)
 *     : 함수를 호출할 때 전달하는 실제 값
 *     : 함수 호출 시 괄호 안에 넣어 함수에 전달
 *   ? 파라미터(parameter)
 *     : 함수의 입력으로 사용되는 변수를 의미
 *     : 함수를 정의할 때 괄호 안에 선언
 *   ? 인수 vs 파라미터
 */

function sum(a, b) { // 소괄호 안의 a, b는 파라미터
  return a + b;
}

// 함수 호출
sum(3, 6); // 3과 6은 인수

// 함수 선언
function hi(name) { // name은 parameter
  console.log(`Hello ${name}`);
}

hi('SeungAh'); //'SeungAh'는 인수

/**
 * ! 자바스크립트의 파라미터와 인수 사용
 *   : 함수 호출 시 전달되는 인수의 수와
 *   : 함수 정의 시 선언된 파라미터의 수가 일치하지 않아도 가능
 */

function log(a) {
  console.log(a);
}

log(); // argument를 넘기지 X - undefined
log(1); // 1
log(1, 2); // 지정된 parameter 수(log는 1개의 파라미터)의 이상으로 argument는 읽히지 않음

/**
 * ! 자바스크립트의 반환 값
 *   : 함수 내에서 return 키워드 사용 시, 함수의 실행을 즉시 중단하고 return 뒤에 오는 값을 반환
 *   ? 반환 값은 함수의 작업 결과를 함수 외부로 전달하는 방법
 *     : 함수의 반환 값을 이용하여 함수의 결과를 다른 변수에 저장
 *     : 다른 함수의 입력으로 사용
 *     : 조건문 또는 반복문에서 사용 가능
 */
function subtract(a, b) {
  return a - b;
}

let substractRefult = subtract(3, 5); // -2


// return이 없는 함수는 undefined를 반환
function noReturnValue() {
  console.log('This function does not return anything.');
}

console.log(noReturnValue());

/**
 * ! JS의 반환값 사용
 */

// 반환값이 있는 함수
function square(x) {
  return x * x; // 파라미터의 제곱을 반환
}

console.log(square(5));

/**
 * ! 함수 사용 시 지역변수와 전역변수 사용
 */

let name = 'Gil Dong'; // 전역 변수
function info() {
  let job = ' Developer'; // 지역 변수
  return name + job;
}
console.log(info());
// console.log(job); // Error
