{
  // ! 타입스크립트 함수
  /**
   * ! 함수의 선언과 호출
   *
   */
  function greet(name: string): string {
    return `hi. ${name}`;
  }
  console.log(greet('kja'));

  type arrowGreetType = (name: string) => string;
  const arrowGreet: arrowGreetType = (name) => `hi. ${name}`;
  console.log(arrowGreet('kja'));

  // ! 선택적 매개변수와 기본 매개변수
  // 선택적 매개변수는 함수 호출 시 생략 가능
  // , 매개변수를 선택적으로 허용

  // 기본 매개변수는 매개변수에 기본 값을 할당
  function select(name?: string, greeting: string = 'hi'): string {
    if (name) {
      return `${greeting} ${name}`;
    }
    return greeting;
  }
  console.log(select()); // hi
  console.log(select('hello')); // hi hello
  console.log(select('hello', 'kja')); // hello kja

  // 선택적 매개변수와 기본 매개변수의 차이
  // 두가지 모두 함수 호출 시 생략 가능
  // 선택적 매개변수는 생략된 경우: undefined로 처리
  // 기본 매개변수는 생략된 경우: 지정된 기본 값을 사용

  // ? 주의사항
  // 선택적 매개변수는 반드시 필수 매개변수 뒤에 작성
  // 기본 매개변수는 필수 매개변수와 선택적 매개변수 양쪽에 작성 가능
  // 기본 매개변수가 필수 매개변수 앞에 작성된 경우
  // : 기본 매개변수를 생략하려면 반드시 undefined를 전달

  /**
   * ! Rest 매개변수
   *   : 함수에 여러 개의 매개변수를 그룹화하여 배열로 전달하는 기능
   *   : 함수에 가변적인 수의 인자를 안전하고 효율적으로 처리하도록 하는 기능
   */
  // ...연산자를 매개변수 앞에 사용하여 정의
  function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }
  const result1 = sum(1, 2, 3, 4, 5);
  console.log(result1); // 15

  const result2 = sum(10, 20, 30);
  console.log(result2); // 60

  function greetEveryone(...names: string[]): string {
    return names.map((name) => `Hi ${name}`).join(', ');
  }
  console.log(greetEveryone('kja', 'ldk', 'ljg'));

  // ? Rest 매개변수는 항상 마지막에 위치
  // ? Rest 매개변수 지정 시 타입을 주의하여 지정

  /**
   * ! 함수 오버로딩
   *   : 같은 이름의 함수에 대해 여러 매개변수 타입과 반환 타입을 정의하는 기능
   *   : 매개변수가 다른 동일한 함수
   *   : 매개변수 타입과 반환 타입이 다른 여러 함수
   *
   * ? 특징
   *   : 함수는 '하나 이상의 타입 시그니처'를 가질 수 있다.
   *   : 함수는 '단 하나의 구현'을 가질 수 있다.
   *
   * ? 기본 문법
   *   : 함수 선언부는 여러 개가 될 수 있지만, 구현은 하나만 있어야 한다.
   */
  function add(a: number, b: number): number; // 오버로드 함수 선언
  function add(a: string, b: string): string; // 오버로드 함수 선언

  function add(a: any, b: any): any {
    // 오버로드 함수 실행부(any 를 써준다)
    return a + b;
  }

  console.log(add('hi', 'kja')); // hikja
  console.log(add(1, 2)); // 3

  // 함수에 대한 다양한 타입의 매개변수를 제공할 수 있도록 지정
  // 그 와 동시에 타입 안정성을 유지
}
