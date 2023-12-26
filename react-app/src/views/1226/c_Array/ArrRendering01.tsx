import React from 'react';

// ! 배열 렌더린(추가, 제거, 수정)
// CRUD 기능

// 동적인 배열 렌더링
// : 자바스크립트 배열의 내장함수

// ? JS의 배열 내장 함수 사용 시 유의사항
// 배열 렌더링 할 때는 key라는 props 설정!
// - key값: 각 원소들마다 가지고 있는 고유값으로 설정
// - initialItems에서는 id가 고유값

// - map()함수 사용 시 고유 값이 없을 경우
//   : callback 함수의 두 번째 파라미터 index를 key로 사용

interface Items {
  items: {
    id: number;
    name: string;
    amount: number;
  };
}

// 기존 장바구니 항목
const initialItems = [
  { id: 1, name: '햄버거', amount: 500 },
  { id: 2, name: '패티', amount: 2000 },
  { id: 3, name: '양상추', amount: 3000 },
];

const Item = ({ items }: Items) => {
  return (
    <div>
      <strong>{items.name}</strong>
      <p>(amount: {items.amount})</p>
    </div>
  );
};

function ArrRendering01() {
  return (
    <>
      {/* <Item items={initialItems[0]} /> */}
      {/* <Item items={initialItems[1]} /> */}
      {/* <Item items={initialItems[2]} /> */}

      {initialItems.map((item) => (
        <Item items={item} />
      ))}
    </>
  );
}

export default ArrRendering01;
