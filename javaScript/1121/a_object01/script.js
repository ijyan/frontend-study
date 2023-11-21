// ! 객체
/**
 * ! 1. 객체의 정의
 *    : 관련된 데이터와 함수의 집합
 *    : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)와 메소드라고 불림.
 *
 * ? JS는 객체 지향 프로그래밍 언어
 * : 실세계에 존재하고 인지하는 모든 것을 객체로 표현
 * : 객체는 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너
 * : 따라서 배열도 여러 타입의 자료를 담는 것이 가능한 객체의 일부
 *
 * ? 객체
 *   : 고유한 특성과 동작을 가지는 것
 *
 *   객체: '사람'
 *   - 특성(속성: 프로퍼티)
 *     : 이름, 나이, 성별, 직업, 취미
 *   - 기능(동작: 메소드)
 *     : 걷다, 인사하다, 먹다
 *
 */

let person = {
  // ? 데이터: 객체의 프로퍼티(속성)
  name     : {
    last : 'Jone',
    first: 'Doe',
  },
  age      : 30,
  gender   : 'male',
  interests: ['develop', 'music'],
  // ? 함수: 객체의 메소드(method)
  bio() {
    console.log(
      `${this.name.last} ${this.name.first} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
    );
  },
  greeting() {
    console.log(`Hi I'm ${this.name.last}.`);
  },
};
/**
 * ! 객체의 기본 형태
 * 중괄호 {...} 안에는 ‘키: 값’ 쌍으로 구성된 프로퍼티가 들어간다.
 * '콜론(:)'을 기준으로 왼쪽엔 키가, 오른쪽엔 값이 위치. 프로퍼티 키는 프로퍼티 ‘이름’ 혹은 '식별자’라고도 부른다.
 *
 * 객체의 프로퍼티 값(value)엔 모든 자료형이 올 수 있다.
 * : 문자열, 숫자, 불리언, 배열, 또 다른 객체, 함수 등
 *
 * ! 객체 리터럴(object literal)
 * : 프로퍼티와 메소드를 통해서 구현하는 객체
 * : 중괄호를 사용하여 그 안에 키와 값이 콜론으로 구분되는 속성
 */
// let objName = {
//   member1Name: 'John Doe', // key: 'member1Name', value: 'John Doe'
//   number: 2, // key: 'number', value: 2
//   val: true, // key: 'val', value: true
// }

/**
 * ! 점 표기법
 *   : 객체에서 프로퍼티와 메소드에 접근하기 위해서 점 표기법을 사용
 *
 * ? 네임스페이스(namespace)
 * : 개체를 구분할 수 있는 범위를 나타내는 말
 * : 하나의 이름 공간에서 하나의 이름이 단 하나의 객체만을 가리킴
 *
 * 객체명(ex.person)은 네임스페이서처럼 동작, 객체 내에서 캡슐화되어 있는 것에 접근 하려면
 * '객체명.하위항목'으로 접근
 */
// 프로퍼티 값 얻기
console.log(person.age); // 30
console.log(person.name.first); // Doe

/**
 * ! 대괄호 표기법
 * 객체명['키']
 */
console.log(person['name']['last']); // John

// 객체 수정
person.name.last = 'Eric';
console.log(person['name']['last']); // Eric

// 객체 추가
person['job'] = 'developer';
person.work = function () {
  console.log('word hard!!');
}

console.log(person.job);
console.log(person.work());

function addProperty() {
// 사용자 입력
  let myDataName = document.querySelector('#propertyName').value;
  let myDataValue = document.querySelector('#propertyValue').value;

  // 프로퍼티 추가
  person[myDataName] = myDataValue;
  console.log(`Property added ${myDataName} = ${person[myDataName]}`);
  console.log(person);
}

// ? 대괄호 표기법을 사용하여 멤버의 이름을 동적으로 사용 가능하며 변수값 또한 사용가능
// >> 점 표기법: 멤버의 이름을 동적으로 사용X, 상수값만을 사용하는 것을 권장

/**
 * ! this
 */

let person1 = {
  name: 'John Doe',
  greeting() {
    console.log(this.name);
  }
}

let person2 = {
  name: 'JunGook',
  greeting() {
    console.log(this.name);
  }
}

person1.greeting(); // John Doe
person2.greeting(); // JunGook
