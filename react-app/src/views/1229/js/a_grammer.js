/**
 * ! 1. 템플릿 문자열
 * : 문자열 내에 변수, 표현식을 쉽게 작성, 멀티라인 표현식을 간편하게 작성
 * : ${} 구문을 사용해서 변수나 표현식을 삽입 가능
 */
const multiLine = `안녕하세요.
반갑습니다.`;
const greeting = `${multiLine}`;
console.log(greeting);

/**
 * ? 2. 화살표 함수
 * : 함수를 간단하게 표현하는 선언 방식
 * : 기본 함수와 this 바인팅에 차이가 있다.
 */
function traditinalFunction() {
  this.value = 20;
  setTimeout(function () {
    // 스코프 내의 this만 가져옴
    console.log(this.value); // undefined
  }, 1000);
}

const arrowFunction = () => {
  this.value2 = 20;
  setTimeout(() => {
    // 함수가 선언될 때 상위 스코프의 this를 상속
    console.log(this.value2); // 20
  }, 1000);
};
traditinalFunction();
arrowFunction();

/**
 * ! 3. 구조분해 할당 & 스프레드 연산자
 *   1) 구조 분해 할당
 *      : 배열이나 객체로 부터 속성이나 요소를 쉽게 추출할 수 있는 표현식
 *      : 배열의 구조 분해 할당은 원 배열의 요소의 수 보다
 *      : 분해할 변수가 더 적은 경우에는 인덱스 순서로 할당
 *   2) 스프레드 연산자
 *      : 배열이나 객체의 요소를 쉽게 복사하거나 합칠 수 있는 연산자
 *      : 배열을 할당하여 복사하는 경우 주소값이 복사되기 때문에 복사된 배열을 수정하면 기존 배열 또한 똑같이 수정되기 때문에 스프레드 연산자 사용
 *      : 스프레드 연산자로 복사를 하는 경우 요소 값만을 새로운 배열에 할당
 */
const person = {
  name: '홍길동',
  age: 30,
  height: 170,
  gender: 'F',
};

// 속성명의 변수명으로 속성값을 할당
const { name, age } = person;
console.log(name);
console.log(age);

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second);

// 구조 분해 할당의 기본값 설정
const { height, gender, job = 'developer' } = person;
// const height = person.height;
// const gender = person.gender;
// const job = 'developer';
console.log(height, gender, job);

// 스프레드 연산자
const arr1 = [1, 2, 3];
// const arr2 = arr1;
let arr2 = [...arr1];
arr2[1] = 5;
arr2 = [...arr1, 4, 5];

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj1, obj2);

/**
 * ! 4. 비동기 프로그래밍
 * : 순차적인 진행 X, 코드 실행이 완료되는 작업부터 출력하는 방법
 *    1) Promise
 *       : 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
 *       : resolve - 성공했을 때의 로직
 *       : reject - 실패했을 때의 로직
 *    2) Async & Await (더 많이 사용)
 *       : 프로미스를 더 쉽게 작성하도록 해주는 ES8 문법
 *       : 비동기 함수는 async 키워드로 선언
 *       : await 키워드를 사용하여 프로미스의 결과를 기다림
 */

const myPromise = new Promise((res, rej) => {
  const value = '성공';
  const error = '실패';
  if (res) {
    res(value); // 성공 결과 전달
  } else {
    rej(error); // 실패 사유 전달
  }
});

myPromise
  .then((value) => {
    // 성공시 수행
  })
  .catch((error) => {
    // 실패 시 수행
  })
  .finally(() => {
    // 완료 시 수행 (성공/실패 여부와 상관없이 실행)
  });

async function fetchData() {
  try {
    // 비동기적으로 수행할 로직을 작성
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    // 데이터 처리
  } catch (error) {
    // 비동기 수행 중 일어나는 오류를 반환
    // 에러 처리
  }
}

/**
 * ! 5. 이벤트 처리
 *   1) 이벤트 핸들링: 사용자의 인터렉션을 처리하는 방법
 *      : JS에서는 DOM요소에 이벤트 리스너를 추가하여 사용자의 행동에 반응
 *   2) 이벤트 위임
 *      : 여러 요소에 대한 이벤트를 한 곳에서 효율적으로 처리하는 기법
 *      : 상위 요소에 하나의 이벤트 리스너를 추가, 이벤트가 발생한 하위 요소를 식별하여 처리
 */
const button = document.querySelector('button');
const handleClick = () => {
  console.log('button clicked');
};

button.addEventListener('click', handleClick);

// 이벤트 위임
const ul = document.querySelector('ul');

// 이벤트 핸들러 정의
function handleListItemClick(e) {
  // ul 안에 li 태그가 클릭 되었을 시 코드 실행
  if (e.target.tagName === 'LI') {
    console.log('List Item Clicked: ', e.target.textContent);
  }
}

ul.addEventListener('click', handleListItemClick);
