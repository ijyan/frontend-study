/**
 * ! 객체의 참조 타입 이해
 *
 * ? 원시 타입(Primitive Type)
 *   : 문자열, 숫자, 불린, null, undefined, symbol
 *
 * ? 참조 타입(Reference Type)
 *   : 객체를 포함한 나머지 데이터 타입
 * ? 참조 타입 정의
 *   : 메모리에 직접 저장된 값을 참조하는 데이터 타입
 *   : 객체(object), 배열(array), 함수(function) 등을 포함
 * ? 참조의 이해
 *   : 참조 타입은 변수에 직접 값을 저장하는 대신에 메모리에 저장된 값을 참조
 */

let num1 = 3;
num2 = num1;
console.log(num2); // 3

num1 = 5;
console.log(num2); // 3

/**
 * ? 참조에 의한 함수 호출
 *   : 함수에 참조 타입의 변수를 전달할 경우, 함수 내부에서 해당 변수를 변경하면 원본 객체도 변경
 *   : 함수에 변수를 전달할 때 값이 아닌 참조(주소값)을 전달하기 때문
 */
// 참조 타입
let computer1 = {
  name: 'Macbook Air',
}

let computer2 = computer1;
console.log(computer2); // Macbook Air

computer2.name = 'Macbook Pro';
console.log(computer1); // Macbook Pro
console.log(computer2); // Macbook Pro

// 참조: 해당 자료의 주소값을 가짐

function changeName (computer) {
  computer.name = 'Macbook M3 Air';
}

let computer3 = {
  name: 'Macbook M3 Pro'
}

changeName(computer3);
console.log(computer3.name); // Macbook M3 Air

/**
 * ! 객체의 복사
 * : 깊은 복사 & 얕은 복사
 *
 * ? 얕은 복사
 *   : 복사본이 원본 객체를 참조하므로 원본 객체가 변경되면 복사본에 영향 O
 *
 * ? 깊은 복사
 *   : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
 *   : 원본 객체와 복사본이 서로 독립적
 */

// 얕은 복사
let animal1 = {
  name: 'choco',
}

let animal2 = animal1;

// 깊은 복사
// ? JS에서는 깊은 복사를 위해 `JSON.parse(JSON.stringify(obj));` 사용
let animal3 = JSON.parse(JSON.stringify(animal1));

animal3.name = 'qwerty';
console.log(animal1);
console.log(animal3);

/**
 * ! 자바스크립트 속성 존재 확인
 * : 키가 객체에 존재하는지 확인을 하기 위해서 `in` 연산자를 사용
 */

let book = {
  title: 'Little Prince',
  author: 'Saint Exupery',
  publishYear: 1943,
}

console.log('title' in book); // true
console.log('hi' in book); // false

/**
 * ! 키 삭제
 * : `delete` 연산자를 사용하여 삭제
 */
delete book.author;
console.log('author' in book); // false

/**
 * ! 메소드 축약 표기
 * : ES6부터는 객체 리터럴 내에서 메소드를 정의할 때 function 키워드를 생략 가능
 */
let teacher = {
  name: 'John Doe',
  greet() {
    console.log(`Hi ${this.name}`);
  }
}
