{
  // ! 유니온 타입과 제네릭
  // 유니온 타입: 여러 타입 중 하나가 될 수 있는 값을 의미

  function processValue<T extends string | number>(value: T) {
    if (typeof value === 'string') {
      return value.toLowerCase();
    }
    return value;
  }

  const processString = processValue('STRING');
  const processNumber = processValue(123);
  const processNumberString = processValue('123');
  console.log(processNumber);
  console.log(processString);
  console.log(processNumberString);

  // ! 제네릭 유틸리티 타입
  // : 타입스크립트에 내장된 일련의 제네릭 타입
  // : 기존 타입을 변환하거나 조작하는데 사용

  // ? Pertial: 모든 속성을 선택적으로 만들어줌.
  interface User {
    name: string;
    age: number;
  }

  const users: { [key: number]: User } = {
    1: { name: 'kja', age: 20 },
    2: { name: 'ljg', age: 34 },
  };

  function updateUser(id: number, chages: Partial<User>) {
    // 업데이트 로직
    const user = users[id];
    if (!user) {
      console.log(`User with id ${id} not found`);
    }
    users[id] = { ...user, ...chages };
  }
  updateUser(2, { name: 'hgd' });
  console.log(users);

  // ? Readonly: 모든 속성을 읽기 전용 속성으로 만들어줌
  interface ReadUser {
    readonly name: string;
    readonly age: number;
  }
  const readUser: Readonly<ReadUser> = {
    name: 'HGD',
    age: 29,
  };
  console.log(readUser);
}
