{
  /**
   * ! 유니언 타입, 인터섹션 타입
   *
   * 사용자가 string, number 또는 boolean 타입의 데이터를 입력할 수 있는 함수
   * 입력된 데이터 타입에 따라 다른 처리
   * string 타입: 문자열을 대문자 처리
   * number 타입: 제곱한 값을 반환
   * boolean 타입: 반대 값을 반환
   */

  function processInput(
    input: string | number | boolean,
  ): string | number | boolean {
    // 유니언 타입 사용 시 타입 제한을 하지 않은 경우에는
    // 유니언 타입으로 지정된 **모든 타입에서 중복되는 속성**만 사용가능
    if (typeof input === 'string') {
      return input.toUpperCase();
    }
    if (typeof input === 'number') {
      return input ** 2;
    }
    return !input;
  }

  console.log(processInput('hello'));
  console.log(processInput(true));
  console.log(processInput(2));

  /**
   * ? 인터섹션 타입
   * 타입 속성을 사용하여 User 타입, Permissions 타입 정의
   * User는 name: string과 age: number 속성
   * Permissions는 role: string과 permissions: string[]속성
   * 두 타입 속성의 인터섹션을 사용하여 EnhancedUser 타입을 생성
   */
  type User = {
    readonly name: string;
    age?: number;
  };

  type Permissions = {
    role: string;
    permissions: string[];
  };

  type EnhancedUser = User & Permissions;

  const user1: EnhancedUser = {
    name: 'Hong gil dong',
    age: 30,
    role: 'developer',
    permissions: ['frontend', 'backend'],
  };

  // user1.name = 'Lee Do Kyeong'; // Error
}
