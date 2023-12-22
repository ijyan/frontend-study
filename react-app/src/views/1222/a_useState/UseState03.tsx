import React, { FormEvent, useState } from 'react';

// ! 여러 개의 입력 상태 값 처리
// : input에 name을 설정하여 이벤트가 발생했을 때 해당 값을 참조
// : useState에서는 문자열이 아니라 객체 형태의 상태를 관리

// ! 리액트 상테에서 객체를 수정해야 할 때는
// input[name] = value; // 직접 수정 X

// setInput({...inputs, [name]: value })
// 위 처럼 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용
function UseState03() {
  interface Input {
    id: string;
    password: string;
  }

  const [inputs, setInputs] = useState<Input>({
    id: '',
    password: '',
  });

  const { id, password } = inputs;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트가 일어난 DOM 요소에서 name과 value를 추출
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤,
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const handleResetClick = () => {
    setInputs({
      id: '',
      password: '',
    });
  };

  // onSubmint 함수
  // : 폼이 제출될 때 호출되는 함수
  // : 실제 환경에서는 API 호출 등을 포함
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>
        여러 개의 입력 상태 관리
      </h5>
      {/* input의 name 속성 */}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          onChange={handleInputChange}
          value={id}
        />
        <input
          type="text"
          placeholder="비밀번호"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <button type="button" onClick={handleResetClick}>
          Reset
        </button>
        <div>
          아이디: {id}
          비밀번호: {password}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UseState03;
