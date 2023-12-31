/**
 * ! 리액트와 일반 TS의 차이
 * 간단한 카운터 예쩨
 * : UI 컴포넌트가 클래스 또는 함수 형태로 작성
 * : 함수형 컴포넌트 사용을 권장
 * : 컴포넌트를 기반으로 UI와 상태관리를 쉽게 구현
 */

import React, { useState } from 'react';

function React02() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment} type="button">
        Increment
      </button>
      <button onClick={decrement} type="button">
        Decrement
      </button>
    </div>
  );
}

export default React02;
