/**
 * ! 자료형(Data Type)
 *   : 기본 자료형(String, number, boolean, null & undefined)
 *   : 자료형 검사
 *   : 자료형 변환
 */


/**
 * ! 기본 자료형
 *   : 컴퓨터가 처리할 수 있는 자료의 형태
 *
 * typeof 변수명: 자료형을 알 수 있는 함수
 *   ? 1. 숫자형 (number)
 */

let num = 10;
let float = 10.5;
console.log(typeof num); // number
console.log(typeof float); // number

/**
 * ! 문자형(String)
 *   : 텍스트 데이터를 나타내는 타입
 *   : 작은 따옴표('') | 큰 따옴표("") | 백틱(``)으로 둘러싸서 표현
 */
let str = 'Hello';
let str2 = "World";
let str3 = `Hello World`;

/**
 * ! 템플릿 문자열
 *   : 백틱을 사용하여 정의
 *   : 문자열 내에서 변수나 표현식을 `${}` 안에 넣어 사용할 수 있도록 하는 문자열
 */

// 변수 삽입
let name = '홍길동';
let greeting = `안녕하세요 ${name}님`;
console.log(greeting);

// 표현식 삽입
let a = 10;
let b = 12;
console.log(`a + b = ${a + b}`);

// 여러줄 문자열: 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine = `첫 번째 줄.
두 번째 줄.
세 번째 줄.`;
console.log(multiLine);

/**
 * ! 논리형(Boolean)
 *   : 참(true) | 거짓(false) 값만을 가지는 자료형
 */
let bool1 = 100 < 10;
console.log(bool1) // false
console.log(typeof bool1); // boolean

bool1 = true;
console.log(bool1) // true

/**
 * ! null & undefined
 *
 *   ? null
 *     : 값이 없음을 명시적으로 나타냄
 *     : (변수에 할당된) 데이터의 값이 유효하지 않은 상태
 *     : 어떤 값이 의도적으로 비어있음을 표현
 *   ? undefined
 *     : 값이 할당되지 않은 변수의 기본값
 */
let hello;
console.log(hello); // undefined
console.log(null);


/**
 * ! 자료형 변환
 */
// 문자열로 변환
// String() 메소드 | toString() 메소드를 사용
let numberToString = String(123);
console.log(typeof numberToString); // string

// 숫자형으로 변환
// Number() 메소드
// 문자열이 숫자로 변환할 수 없는 경우: NaN

// NaN의 특징
// - 어떤 값과도 동등하지 않음
//   NaN !== NaN
// - 연산에서 전파: 어떤 수학의 연산도 NaN과 만나면 결괏값이 NaN
let stringToNumber = Number('123');
console.log(typeof stringToNumber); // number

let notANumber = Number('This is not a number');
console.log(notANumber); //NaN

// 불리언으로 변환
// Boolean() 메소드
// JS의 불리언 변환
// : false, 0, '', null, undefined, NaN을 제외한 값은 모두 true로 간주
let stringToBoolean = Boolean('Hello');
let numberToBoolean = Boolean(0);
console.log(stringToBoolean); // true
console.log(numberToBoolean); // false
