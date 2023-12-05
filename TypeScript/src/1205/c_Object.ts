{
  /**
   * ! 객체 타입
   *
   * ? 오브젝트 '리터럴'
   * : 실제 객체 데이터 정의
   * : 구분자로 쉼표(,)만 사용가능
   * : 객체 이름을 소문자로 시작
   *
   * 객체 타입 정의
   * : 구분자로 쉼표 뿐만 아니라 세미콜론(;)도 사용 가능
   * : 타입 이름을 대문자로 시작
   */
  const user: {
    name: string;
    height: number;
  } = {
    name: '홍길동',
    height: 183,
  };

  console.log(user.name);
  console.log(user.height);

  /**
   * ? 구조적 타이핑
   *   : 객체의 타입을 그 구조나 멤버에 의해서 결정하는 방식
   *   : 객체의 형태가 같다면, 같은 타입으로 간주
   *
   * ? 덕 타이핑(duck typing)
   *   : 객체의 실제 타입보다는 객체가 가진 속성과 메소드가 어떤 타입에 맞느냐가 중요
   */

  interface Person {
    name: string;
    age: number;
  }

  function greet(person: Person) {
    console.log(`Name: ${person.name} / Age: ${person.age}`);
  }

  // Person 타입이 명시적으로 구현되지 않은 객체 생성
  // Person과 구조가 같기 때문에 Person으로 취급
  const jungkook = {
    name: 'jungkook',
    age: 30,
  };

  // 정상작동: job 속성을 무시한 채로 Person으로 취급
  const dokyeong = {
    name: 'dokyeong',
    age: 32,
    job: 'developer',
  };

  const taehyung = {
    name: 'taehyung',
  };

  greet(jungkook);
  greet(dokyeong);

  // Person 타입 속성의 구조와 일치하지 않음 (age 속성 누락)
  // greet(taehyung); // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

  /**
   * ! 중첩된 객체 타입
   *   : 객체 내부에 또 다른 객체를 포함하는 형태
   *   : 복잡한 데이터를 조직화하고 관리하기 용이
   */

  // 예시) 사용자 프로필과 주소 정보를 포함하는 중첩된 객체 타입을 정의
  interface Address {
    street: string;
    city?: string;
    zipCode: string;
  }

  interface UserProfile {
    name: string;
    email?: string;
    address?: Address;
  }

  const userA: UserProfile = {
    name: 'A',
    email: 'a@naver.com',
    address: {
      street: '123 ST',
      // city: 'Busan',
      zipCode: '12345',
    },
  };

  console.log(userA.name);
  // console.log(userA.address.city);

  function isAddress(user: UserProfile): void {
    // 중첩된 객체 속성을 옵셔널 하는 경우
    // , 해당 객체를 생략하는 경우를 대비하여 오류를 발생
    // , 오류를 방지하기 위해서 조건문 사용
    if (user.address) {
      console.log(user.address.street);
    }
  }

  isAddress(userA);

  /**
   * ! 인덱스 서명
   *   : 객체의 모든 속성에 대해 타입을 정의하지 않고, 키와 값의 타입만을 정의하여 객체의 구조를 유연하게 지정하는 방법
   *   : 객체의 속성에 동적으로 접근할 수 있는 기능
   *
   * 장점
   * - 우연성: 정해직 속성 이름 없이 다양한 속성을 객체에 추가 가능
   * - 동적 데이터 처리: 런타임에 키와 값을 결정 가능
   *
   * 사용법
   * : 객체의 타입 정의 시 대괄호[]를 사용하여 선언
   */

  type UserRecord = {
    // [propertyName: indexType]: value Type;
    [key: string]: string;
  };

  const users: UserRecord = {
    name: 'kja',
    age: '20',
    true: 'true',
    // 추가적인 사용자 속성을 지정 가능
  };
  users.firstName = 'Kim';
  console.log(users.firstName);
}
