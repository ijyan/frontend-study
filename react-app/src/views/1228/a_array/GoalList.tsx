import React from 'react';

interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

interface OwnProps {
  goals: Goal[];
  // 삭제 버튼 클릭 시 onRemove 함수로 해당 버튼이 있는 배열의 id가 생성
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

function GoalList({ goals, onRemove, onToggle }: OwnProps) {
  return (
    <>
      {/* title - explanation */}
      {goals.map((item) => {
        return (
          <div key={item.id}>
            <button type="button" onClick={() => onRemove(item.id)}>
              삭제
            </button>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <span
              role="presentation"
              style={{
                cursor: 'pointer',
                color: item.active ? 'blue' : 'black',
              }}
              onClick={() => onToggle(item.id)}
            >
              {item.title} - {item.explanation}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default GoalList;
