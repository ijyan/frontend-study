/**
 * ! 변수(variable)
 *   : 변하는 수(값이 달라질 수 있는 데이터)
 *   : 예) 나이, 연도 등
 *
 *   : 데이터를 저장하기 위한 '공간'
 *
 * ! 변수 선언
 *   : 변수를 사용하기 위해 변수를 다른 변수들과 구별하기 위해 이름을 붙여 주는 것, 값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것
 *
 * ! 변수명 명명규칙
 *   - 첫 글자: 영문자, 언더스코어, 달러만 사용 가능(이수 숫자 사용 가능)
 *   - 띄어쓰기 허용 X
 *   - 기호는 _, $만 사용 가능
 *   - 영어 대소문자 구별
 *     now 변수와 Now 변수는 다른 변수
 *   - 예약어 사용 X
 *
 *   ? lowerCamelCase 사용
 *     : 시작은 소문자로 시작
 *     : 이어지는 단어의 시작은 대문자로 시작
 *     ex) 사용가능한 변수(now, _now, now25, now$25)
 *         사용가능하지 않은 변수(25now, now 25, *now)
 *
 *   ? 이름을 의미있게 작성
 *     - currentYear: 올해 연도
 *     - birthYear: 태어난 연도
 *
 *     나이 구하기
 *     age = currentYear - birthYear;
 *
 * ! 자바스크립트의 변수 선언
 *   : 2가지 키워드
 *   : let, var 키워드
 *   : 선언과 초기화
 *     변수종류 변수명; // 변수 선언
 *     변수명 = 값; // 변수에 값을 할당
 *     변수종류 변수명 = 값; // 선언과 동시에 할당(초기화)
 *
 *   ? let
 *     : 블룩 번위 변수(Block Scope)
 *     : 재할당 가능
 *     : 호이스팅 가능(하지만, 선언 전에 접근 불가)
 *   ? var
 *     : 함수 범위 변수(Function Scope)
 *     : 재할당 가능
 *     : 호이스팅 가능 (선언 부분이 상단으로 끌어올려짐)
 */

let letVariable;
var varVariable;

letVariable = 10; // 값 할당
varVariable = 'Hello world'; // 값 할당

let letVariable2 = 20;
var varVaribale2 = '안녕 변수!';

// ! Practice : 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2023값 할당
// 태어난 연도의 경우 prompt창에서 값을 할당 받아옴.
// 나이 변수에 올해 연도와 태어난 연도 변수를 사용하여 식을 완성
// 해당 나이 결과를 웹 브라우저에서 출력
// '태어난 연도'에 태어난 사람의 나이는 '나이'세 입니다.

let currentYear = 2023;
let birthYear = prompt('태어난 연도를 입력해주세요.');
let age = +currentYear - +birthYear + 1;
document.write(`<h1>${currentYear}년에 태어난 사람의 나이는 ${age}세 입니다.</h1>`);

/**
 * ! 상수(Constant)
 *   : 한 번 할당된 값을 변경할 수 없음(재할당 불가)
 *   : 선언과 동시에 할당이 반드시 이루어져야 함(초기화)
 *   : 과학적 공식에서 사용하는 숫자 값(pi 등)
 *
 * ! 상수 명명규칙
 *   : UPPER_SNAKE_CASE 사용
 *   ex) const MY_CONSTANT = 'hi';
 *       const PI = 3.14159...;
 */
const PI = 3.14;

/**
 * ! 유효범위 & 호이스팅
 *
 *   ? 유효범위
 *     : 변수(상수) 또는 함수가 선언되어 있는 영역
 *     : 해당 영역에서 변수 및 함수에 접근할 수 있는 범위
 *
 *     - 전역 유효범위(Global Scope)
 *       : 코드의 모든 부분에서 접근할 수 있는 변수, 함수
 *     - 지역 유효범위(Local Scope)
 *       * 함수(function) 유효범위
 *         : var 키워드로 선언된 변수
 *       * 블록 유효범위
 *         : 블록({}, 중괄호)내에서만 접근할 수 있는 변수
 *         : let, const 키워드로 선언된 변수
 *
 *   ? 호이스팅(Hoisting)
 *     : 변수와 함수 선언은 코드 실행 전에 메모리에 저장
 *     : 변수의 경우, 선언부만 호이스팅(제일 상단부로 끌어올려짐)
 *   ? var는 선언부가 호이스팅 됨.
 *   ? let, const는 호이스팅 되지만, TDZ(Temporal Dead Zone) 때문에 접근 불가
 *
 *   ? var 키워드 위험성
 *     : 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 때문에 사용 X
 */

// var 호이스팅
// var a; 생략
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// let과 const의 호이스팅
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 5;

console.log(c); // Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 5;
