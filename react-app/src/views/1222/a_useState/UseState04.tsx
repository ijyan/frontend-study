import React, { useState } from 'react';

function UseState04() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isVisiable, setIsVisiable] = useState<boolean>(false);
  const [user, setUser] = useState<{ id: number; name: string }>({
    id: 0,
    name: '',
  });

  const [items, setItems] = useState<string[]>([]);
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <>
      <h5 style={{ backgroundColor: 'black', color: 'white' }}>
        여러 타입의 상태 관리
      </h5>
      {/* 숫자형: 카운터 증가 버튼 */}
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>

      {/* 문자열: 사용자 이름 입력 필드 */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 논리형: 토글 버튼 */}
      <button onClick={() => setIsVisiable(!isVisiable)} type="button">
        Toggle Visibility
      </button>

      {/* 사용자 정보 수정 입력 필드 */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleUserChange}
        placeholder="User Name"
      />

      {/* 아이템 추가 버튼 */}

      <button onClick={addItem} type="button">
        Add Item
      </button>

      {/* 상태 표시 */}
      <div>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Visibility: {isVisiable ? 'Yes' : 'No'}</p>
        <p>User: {JSON.stringify(user)}</p>
        <p>Items: {JSON.stringify(items)}</p>
      </div>
    </>
  );
}

export default UseState04;
