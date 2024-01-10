/**
 * ! JS - this
 *
 * ! this 개념
 * : 현재 실행 중인 컨텍스트를 가리는 참조 변수
 * 실행 컨텍스트: 코드가 실행되는 환경
 *
 * : 객체의 메소드 내에서 사용될 때, 해당 메소드를 호출한 객체를 가리킴
 * : 브라우저에서는 전역 실행 컨텍스트: window
 */
console.log(this); // window

/**
 * ? 함수 컨텍스트에서의 this
 * 일반 함수에서의 this
 * : 함수가 어떻게 호출되었는지에 따라 달라짐
 *
 * 화살표 함수에서의 this
 * : 자신이 선언된 렉시컬 컨텍스트의 this 값을 가져옴
 *
 * 렉시컬 컨텍스트: 현재 실행중인 코드 환경의 this 값과 선언된 모든 변수와 함수가 저장되는 곳
 *
 * 함수 호출 방식에 따른 this 값의 차이
 * 일반 호출 vs 메소드 호출
 * - 일반 호출: 전역 객체 호출
 * - 메소드 호출: 해당 this가 담긴 객체를 출력
 */
function show() {
  console.log(this);
}

show(); // 전역 객체를 출력

// 화살표 함수에서의 this
const obj = {
  show() {
    const arrowFuc = () => console.log(this);
    arrowFuc();
  },
};

obj.show();

/**
 * ? 객체 메소드에서의 this
 * 객체의 메소드로서 함수가 호출될 때 this 값
 * - 객체의 메소드에서 this는 메소드를 호출한 객체를 가리킴
 *
 * 메소드 내에서 다른 함수를 호출할 때 this 값
 * - 메소드 내의 '일반 함수'
 */
// 예제: 객체의 메소드로서 함수가 호출될 떄 this 값
const user = {
  name: 'hgd',
  greet() {
    console.log(`안녕하세요. ${this.name} 입니다.`);

    // 메소드 내에서 다른 함수가 호출되는 경우
    // : 메소드 내의 일반 함수

    // 일반 함수 내에서 변수에 this 할당을 하려는 경우
    // : self 키워드를 사용하여 user 객체의 name에 접근
    const self = this; // user 객체가 담김
    function display() {
      console.log(`이름: ${this.name}`); // 일반 함수이기 때문에 전역으로 접근 (undefined)
      console.log(`이름: ${self.name}`);
    }
    display();

    // 화살표 함수는 외부의 this를 상속
    const arrow = () => console.log(`이름: ${this.name}`);
    arrow(); // 이름: hgd
  },
};

user.greet();

/**
 * 명시적 this 바인딩
 * call(), apply() - 즉시 함수 호출
 *
 * bind() - 새로운 함수를 반환
 *
 * 1. call()
 * : 첫 번째 인자로 this 값을 설정, 이후의 인자들은 호출될 함수의 인자로 전달
 * : 첫 번째 인자로 null을 전달할 경우 기본 this 바인딩을 사용
 *
 * 2. apply()
 * : 함수 인자를 배열 형태로 전달
 *
 * 3. bind()
 * : 새로운 함수를 생성하고 해당 함수의 this값을 첫 번째 인자로 고정
 */
// call()
function introduce(name, profession) {
  console.log(`내 이름은 ${name}이고, 직업은 ${profession} 입니다.`);
}

const personContext = {
  name: '홍길동',
  job: '회사원',
};
introduce.call(personContext, personContext.name, personContext.job);

// apply()
function introduce2(name, profession) {
  console.log(`내 이름은 ${name}이고, 직업은 ${profession} 입니다.`);
}

const personContext2 = {
  name: '이준국',
  job: '한의사',
};

// 첫 번째 인자로 null을 전달하여 기본 this 바인딩을 사용
introduce2.apply(personContext2, [personContext2.name, personContext2.job]); // 인자를 배열로 전달

// bind()
// personContext2 객체를 this로 바인딩
function introduce3(name, profession) {
  console.log(`내 이름은 ${this.name}이고, 직업은 ${this.job} 입니다.`);
}
const boundIntroduce = introduce3.bind(personContext2);
boundIntroduce();

/**
 * ! 생성자 함수의 this
 * 생성자 함수: new 키워드와 함께 사용, 새로운 객체를 생성
 * : 생성자 함수 내부의 this는 새로 생성되는 객체에 바인딩
 */
function Language(name) {
  this.name = name;
  this.introduce = function () {
    // this: introduce1 객체를 가리킴
    console.log(`${this.name} 프로그래밍 언어를 학습`);
  };
}

const language1 = new Language('js');
language1.introduce();
