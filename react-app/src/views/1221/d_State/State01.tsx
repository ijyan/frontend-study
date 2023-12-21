/**
 * ! 훅(Hooks)
 *   : 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 기능
 *   : 형태 (use-: -한 기능을 사용한다.)
 *
 * ! useState 훅
 *   : 상태 관리의 기능
 *     >> 컴포넌트의 메모리, 사용자의 상호작용이나 데이터 변화에 따라 동적으로 변화하는 데이터
 */
import React, { useState } from 'react';

function Counter() {
  // ? useState를 사용한 상태관리
  // : 상태의 기본값을 인자로 받고, 상태 변수와 그 상태를 설정하는 함수를 반환

  // const [state, setState] = useState<stateType>(initialValue);
  // - state: 현재 상태값
  // - setState: 상태를 업데이트하는 함수
  // - initialValue: 초기 상태값

  const [count, setCount] = useState<number>(0);

  const onIncrease = () => {
    // 상태 업데이트는
    // : setCount 함수를 사용하여 상태를 업데이트
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h4>{count}</h4>
      {/* 함수 호출이 아닌 함수 전달 */}
      <button type="button" onClick={onIncrease}>
        + 1
      </button>
      <button type="button" onClick={onDecrease}>
        - 1
      </button>
    </>
  );
}
function State01() {
  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <Counter />;
    </div>
  );
}

export default State01;
