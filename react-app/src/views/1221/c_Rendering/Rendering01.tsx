import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ItemType {
  name: string;
  isPacked: boolean;
}
function Item({ name, isPacked }: ItemType) {
  // ! if를 사용한 조건부 렌더링
  // 만약 조건부로 아무것도 반환하지 않을 경우
  // : null을 반환
  // : return null;

  // if (isPacked) {
  //   return <li className="item">{name} 😎</li>;
  // }
  // return <li className="item">{name}</li>;

  // ! 삼항연산자 사용
  // return <li className="item">{isPacked ? `${name}😎` : name}</li>;
  return (
    <li className="item">
      {isPacked ? (
        // del 태그: 텍스트를 가로지르는 선
        <del>{name}</del>
      ) : (
        name
      )}
    </li>
  );
}

// ! 논리연산자(&&, ||)를 사용한 조건부 렌더링
// react-icons (npm i react-icons)
// > https://react-icons.github.io/react-icons/
function Rendering01() {
  const score = 10;
  const score01 = 0;
  return (
    <>
      <p>Packing List</p>
      <ul>
        <Item name="Snack" isPacked={false} />
        <Item name="Note" isPacked={false} />
        <Item name="clothes" isPacked />
      </ul>
      {/* && 연산자 사용: 평점이 있을 경우에만 별점 표시 */}
      {score > 0 && <FaStar />}
      {/* || 연산자 사용: 평점이 없을 경우 '평점 없음' 메시지 표시 */}
      {score01 > 0 || <FaStar />}
    </>
  );
}

export default Rendering01;
