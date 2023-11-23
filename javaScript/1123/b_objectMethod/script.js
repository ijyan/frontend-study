// 자바스트립트 내장 객체

/**
 * ! JSON 객체
 *   JavaScript Object Notation(JS 객체 표기법)
 */

/**
 * ? JSON 구조
 *   : JSON 내부에는 JS에서 사용할 수 있는 기본 데이터 타입인 문자열, 숫자, 배열, 불리언, 그 밖의 다른 객체 또한 포함 가능
 *   : JS의 배열과 객체를 활용하여 어떤한 자료의 형태를 표현하는 형식
 *
 * 'key-value' 즉, '키-값'을 쌍으로 데이터를 구조화하는데 사용
 * : 형태 자체는 JS의 객체와 유사하지만, JSON은 순수한 텍스트 형식이기 때문에 키를 항상 따옴표로 묶어야 한다.
 * : 값에는 함수 등은 사용 불가
 *
 * ? JSON 사용
 *   : 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용
 */

/**
 * ? JSON.stringify
 * : 객체를 JSON 문자열으로 바꿔줍니다.
 *
 * 일반 객체와 다른 특징
 * - 문자열은 큰따옴표로 감싸야한다. 작은따옴표나 백틱을 사용할 수 없다.
 * - 객체의 프로퍼티 이름은 큰따옴표로 감싸야 한다.
 *
 * > Syntax
 *   JSON.stringify(value[, replacer, space])
 *   : value - 인코딩 하려는 값
 *   : replacer - JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열, 또는 매핑 함수
 *   : space - 서식 변경 목적으로 사용할 공백 문자수
 */
let student = [
  {
    name   : 'John',
    age    : 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife   : null,
  },
  {
    name   : 'John',
    age    : 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife   : null,
  },
  {
    name   : 'John',
    age    : 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife   : null,
  },
];

let jsonStudent = JSON.stringify(student);
console.log(jsonStudent); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

// 공백 문자 들여쓰기
console.log(JSON.stringify(student, null, 2));

/**
 * ? JSON.parse()
 *   : JSON 문자열을 자바스크립트 객체로 전환
 */
console.log(JSON.parse(jsonStudent));


/**
 * ! Math 내장 객체
 *   : 수학과 관련된 기본적인 연산을 할 때 사용되는 메소드
 *
 * ? Math.PI
 *   : 파이 값 3.14159의 값을 가짐
 * ? Math.random()
 *   : 0 이상 1 미만의 난수를 생성
 * ? Math.sqrt()
 *   : 제곱근 계산
 * ? Math.pow()
 *   : base에 exponent를 제곱한 값을 반환
 *   > Syntax
 *     Math.pow(base, exponent);
 *     Math.pow(2, 4); // 16
 * ? Math.floor()
 *   : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
 *   : 숫자를 가장 가까운 정수로 내림
 * ? Math.ceil()
 *   : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환
 *   : 소수점 숫자를 올림
 * ? Math.round()
 *   : 반올림한 수와 가장 가까운 정수 값을 반환
 * ? Math.trunc()
 *   : 소수부분을 제거하고 숫자의 정수 부분은 반환
 *   : 소수점 버림
 * ? Math.abs()
 *   : 절대값 반환
 * ? Math.max()
 *   : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
 * ? Math.min()
 *   : 입력값으로 받은 0개 이상의 숫자 중 가장 작은 숫자를 반환
 */
// 0이상 1미만의 난수를 생성
console.log(Math.random());

const num = [4, 7, 2];
console.log(Math.max(...num)); // 7
console.log(Math.min(...num)); // 2

/**
 * ! Date
 *   : 날짜와 시간을 처리하는 메소드를 제공
 */
let now = new Date();
console.log(now); // Thu Nov 23 2023 15:44:12 GMT+0900 (한국 표준시)
console.log(now.getDate()); // 23 (일)
console.log(now.getDay()); // 4: 목요일
