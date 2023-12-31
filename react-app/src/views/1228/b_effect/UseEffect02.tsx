import React, { useEffect, useState } from 'react';

// ! useEffect 정리함수
// 타이머가 정리될 때 실행할 함수 구현
function UseEffect02() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);

  return <div>타이머: {count}</div>;
}

export default UseEffect02;
