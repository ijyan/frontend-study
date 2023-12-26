import React, { useRef, useState } from 'react';

// ! useRef
// : reference(참조)의 축약어
// : 변경 가능한 참조 객체를 생성
// - 주로 DOM 요소에 직접적으로 접근할 때 사용
// - 렌더링 사이에 지속되는 값을 유지

// ? 텍스트 길이 카운팅
function UseRef01() {
  const [text, setText] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  // 텍스트의 길이를 저장하기 위한 useRef
  const lengthRef = useRef(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    // 입력된 텍스트의 길이를 lengthRef에 저장
    lengthRef.current = e.target.value.length;
  };

  // ! 타이머 구현
  // 타이머의 간격(인터벌) ID를 저장
  const intervalRef = useRef<number | null>(null);
  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      // 매 초마다 time 상태를 1씩 증가
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleChange} />
      {/* lengthRef를 사용하여 현재 텍스트 길이를 표시 */}
      <p>TextLength: {lengthRef.current}</p>

      <h4>## useRef를 사용하는 타이머 예제</h4>
      <p>Time: {time} seconds</p>
      <button type="button" onClick={startTimer}>
        시작
      </button>
      <button type="button" onClick={stopTimer}>
        종료
      </button>
      <button type="button" onClick={resetTimer}>
        초기화
      </button>
    </>
  );
}

export default UseRef01;
