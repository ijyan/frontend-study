/**
 * ! 객체의 속성 존재 여부 확인
 *   : 객체에 없는 속성에 접근 - undefined 출력
 *   : 조건문으로 undefined 인지 아닌지 확인
 */

let obj = {
  name   : 'John',
  age    : 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife   : null,
};

// 객체 키 존재 여부
if (obj.name) {
  console.log('속성이 존재합니다.');
} else {
  console.log('속성이 존재하지 않습니다.');
}

// 조건문은 연산자를 활용하여 간단하게 표시
message = obj.name || '속성이 없습니다..';
console.log(message);
message = obj.hobby || '속성이 없습니다.';
console.log(message);


/**
 * ? 기본 속성 지정하기
 */
obj.name = obj.name ? obj.name : '이름을 알 수 없는 학생';
obj.hobby = obj.hobby ? obj.hobby : '취미를 알 수 없음';
console.log(JSON.stringify(obj, null, 2));

/**
 * ! 구조 분해 할당(배열)
 * : 배열과 비슷한 방법으로 한 번에 여러 개의 변수에 값을 할당
 */
let [a, b] = [1, 2];
console.log(a, b); // 1 2
[a, b] = [b, a];
console.log(a, b); // 2 1

let arr = [1, 2, 3, 4, 5];
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

/**
 * ! 구조 분해 할당(객체)
 *   : 객체 내부에 있는 속성을 꺼내서 변수로 할당할 때 사용
 */
const bookObj = {
  name     : '어린왕자',
  price    : 10620,
  publisher: '열린책들',
}
const {name, price} = bookObj;
console.log(name, price); // 어린왕자 10620

// name 속성에 bookname, price속성에 bookprice
const {bookname = name, bookprice = price} = bookObj;
console.log(bookname, bookprice); // 어린왕자 10620

/**
 * ! 스프레드 연산자(배열)
 * ? 얕은 복사
 *   : 얕은 복사(참조 복사)는 서로 이름만 다를 뿐 서로 같은 메모리 참조값을 가짐
 * ? 깊은 복사
 *   : 두 배열(객체)이 완전히 독립적으로 작동
 *   : 스프레드 연산자를 사용하여 깊은 복사
 *   : 스프레드 연산자 - [...배열]
 */
// 얕은 복사
const list01 = ['milk', 'bread'];
const list02 = list01;
list01.push('cheese');
list02.push('tomato');
console.log(list01, list02); // 결과가 동일함

// 깊은 복사
const list03 = [...list01];
list03.push('potato');
console.log(list01, list03);

// 스프레드 연산자를 사용한 배열 요소 추가
const list04 = ['onion', ...list01, 'carrot'];
console.log(list04);

/**
 * ! 스프레드 연산자(객체)
 */
const puppy = {
  name: 'Eric',
  age: 3,
  breed: 'poodle',
}

const puppyA = {...puppy};
puppyA.age = 2;
console.log(puppy, puppyA);

// 스프레드 연산자를 사용한 객체 요소 추가
const puppyB = {
  ...puppy,
  name: 'John',
  breed: 'Shiba',
}
console.log('---');
console.log(puppyB); // {name: 'Eric', breed: 'poodle', age: 3}
