import React from 'react';

interface UserType {
  name: string;
  height: number;
}

interface ChildComponentProps {
  userInfo: UserType;
  onUpdate: (newInfo: UserType) => void;
}

function ChildProps02({ userInfo, onUpdate }: ChildComponentProps) {
  const updateInfo = () => {
    // 상태 업데이트
    onUpdate({ name: 'Hong gil dong', height: 180 });
  };
  return (
    <>
      <p>Name: {userInfo.name}</p>
      <p>Height: {userInfo.height}</p>
      <button onClick={updateInfo} type="button">
        Update Info
      </button>
    </>
  );
}

export default ChildProps02;
