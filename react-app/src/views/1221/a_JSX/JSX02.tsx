/**
 * ! JSX안에 자바스크립트 값 사용하기
 *
 * ? 1. JSX 내에서 중괄호 사용하기
 *   - JSX 태그 내에서 직접 텍스트 사용 시
 *   - 속성 =(기호) 바로 다음에
 */
import React from 'react';

function Jsx02() {
  // 1. 중괄호를 사용한 변수 참조
  const welcomeMessage = '환영합니다!';

  // 2. 중괄호를 사용한 함수 호출
  const greeting = (name: string): string => `안녕하세요 ${name}님`;

  // 3. 중괄호를 사용한 객체 사용
  interface UserType {
    name: string;
    age: number;
  }

  const userInfo: UserType = {
    name: '홍길동',
    age: 20,
  };

  // ? 중괄호를 사용한 속성 지정
  // : JSX에서 문자열, 숫자, 기타 JS 표현식뿐만 아니라 객체까지도 모두 중괄효
  // style 속성 지정 시 객체 형식으로 작성
  // 더블 컬리 {{}} 사용
  // : JSX에서 JS 객체를 전달 할때에는 중괄호 쌍으로 감싸야 함.
  const divStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
    padding: '10px',
  };

  const text = '스타일 속성 사용하기';

  return (
    <>
      <div>{welcomeMessage}</div>
      <div>{greeting('홍길동')}</div>
      <div>
        이름: {userInfo.name}, 나이: {userInfo.age}
      </div>
      {/* 속성에서 중괄호 사용 */}
      <div style={divStyle}>{text}</div>
    </>
  );
}

export default Jsx02;
