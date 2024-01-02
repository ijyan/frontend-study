import React, { ChangeEvent, useState } from 'react';

/**
 * ! 화살표 함수
 * rest 파라미터(...args)
 * : 여러 개의 인자를 배열로 전달 받는 방법
 *
 * ! 구조분해 할당 & 스프레드 연산자
 */

interface User {
  name: string;
  age: number;
  email: string;
}

function ReactGrammar() {
  // ? 불변성
  // : 상태를 직접 수정 X
  // : 상태 변화가 필요할 때 새로운 객체 또는 배열을 생성하여 반환

  const hgd: User = {
    name: 'hgd',
    age: 29,
    email: 'qwerty@naver.com',
  };
  const [user, setUser] = useState<User>(hgd);
  const { name, age, email } = user;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>이메일: {email}</p>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="text" name="age" value={age} onChange={handleChange} />
      <input type="text" name="email" value={email} onChange={handleChange} />
    </>
  );
}

export default ReactGrammar;
