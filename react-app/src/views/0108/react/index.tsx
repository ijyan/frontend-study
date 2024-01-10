import React, { useState } from 'react';

/**
 * ! useState
 * : 함수형 컴포넌트에서 상태 관리
 *
 * 기본 구조
 * const [state, setState] = useState(initialState);
 * state(상태 변수): 현재 상태 값
 * setState(설정 함수): 상태를 업데이트하는 함수
 * initialState: 초기 상태를 설정
 */

function Index() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        증가
      </button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        감소
      </button>
    </>
  );
}

export default Index;
