{
  // ! 타입스크립트 제네릭의 제약 조건(Constraints)

  // ? 제약조건의 정의
  // : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
  // : 제네릭 타입의 사용 범위를 제한하고, 특정 속성이나 메소드에 접근 가능

  interface Lengthwise {
    // 하나의 속성(length)을 가지는 인터페이스
    // : 해당 속성의 타입이 number

    // Lengthwise 인터페이스를 구현하는 모든 객체는 숫자 타입의 length 속성을 반드시 가져야한다.
    length: number;
  }

  // T라는 제네릭 타입이 Lengthwise 인터페이스를 확장(상속)해야 함.
  // : length 속성을 포함하는 어떠한 객체든지 인자로 받을 수 있음.
  function constrainsFuc<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  const constraintsVar = constrainsFuc({ length: 10, value: 3 });
  console.log(constraintsVar);
  // 10
  // { length: 10, value: 3 }

  // keyof: 객체 형태의 타입을 따로 속성들만 뽑아 유니온 타입으로 만들어주는 연산자
  type Type = {
    name: string;
    age: number;
  };

  type Union = keyof Type;

  // 최소한의 속성을 가진 객체 찾기
  interface Index {
    [key: string]: number;
  }
  function findWithMinProperty<T extends Index, K extends keyof T>(
    array: T[],
    key: K,
  ) {
    // array 배열 내에서 최소 값을 가진 객체를 찾기
    return array.reduce(
      (acc, cur) => (acc[key] < cur[key] ? acc : cur),
      array[0],
    );
  }

  const result = findWithMinProperty([{ a: 20 }, { b: 15 }, { a: 50 }], 'a');
  console.log(result);

  // ! 조건부 타입(Conditional Types)
  // : 타입 매개변수에 대한 조건 표현식을 기반으로 타입을 결정하는 방식
  // : if문과 유사한 역학

  type Check<T> = T extends string ? 'String' : 'Not a String';

  type Type1 = Check<string>; // String
  type Type2 = Check<number>; // Not a String

  function checkType<T>(value: T): Check<T> {
    return typeof value === 'string'
      ? ('String' as Check<T>)
      : ('Not a String' as Check<T>);
  }
  console.log(checkType('kja'));

  // 타입 단언
  // : 타입스크립트에게 개발자가 특정 값의 타입임을 알고 있음을 전달
  // : 컴파일러가 타입을 정확하게 추론하지 못하는 경우
  // : 개발자가 구체적인 타입을 프로그램에게 전달

  // 각주 문법(as)
  const someValue: any = 'this is a string';
  const strLength: number = (someValue as string).length;
}
