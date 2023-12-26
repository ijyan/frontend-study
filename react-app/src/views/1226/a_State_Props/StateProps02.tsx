import React, { useState } from 'react';
import ChildProps02 from './ChildProps02';

// ! 자식 컴포넌트의 이벤트를 부모 컴포넌트에게 전달
// : 자식 컴포너느에서 발생한 이벤트를
// : 부모 컴포넌트의 함수를 통해 처리
interface UserType {
  name: string;
  height: number;
}

const init: UserType = {
  name: 'Hong gil dong',
  height: 180,
};
function StateProps02() {
  const [userInfo, setUserInfo] = useState<UserType>(init);
  const handleUpdate = (newInfo: UserType) => {
    setUserInfo(newInfo);
  };
  return <ChildProps02 userInfo={userInfo} onUpdate={handleUpdate} />;
}

export default StateProps02;
