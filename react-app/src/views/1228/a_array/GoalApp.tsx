import React, { ChangeEvent, useRef, useState } from 'react';
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';

interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

const initialGoals: Goal[] = [
  {
    id: 1,
    title: '책 읽기',
    explanation: '경제 서적 10권 읽기',
    active: false,
  },
  {
    id: 2,
    title: '운동하기',
    explanation: '걷기',
    active: false,
  },
  {
    id: 3,
    title: '개발 공부하기',
    explanation: 'react',
    active: true,
  },
];

function GoalApp() {
  // 목표 상태 관리
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // 목표 입력 상태 관리
  const [goalInput, setGoalInput] = useState({
    title: '',
    explanation: '',
  });

  const nextId = useRef(4);

  // 목표 입력 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // 두 개의 input 창의 값을 하나의 핸들러로 관리하기 때문에 이벤트가 일어나느 target에서 데이터 값을 비구조화 할당으로 처리
    const { name, value } = e.target;

    setGoalInput({
      ...goalInput,
      [name]: value,
    });
  };

  const handleCreate = (): void => {
    // 새로운 목표 생성
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explanation: goalInput.explanation,
      active: false,
    };

    // 현재 목표를 목표 목록에 추가
    setGoals([...goals, newGoal]);

    // 입력 필드 초기화
    setGoalInput({ title: '', explanation: '' });

    // 다음 id 증가
    nextId.current += 1;
  };

  const handleRemove = (id: number) => {
    setGoals(goals.filter((item) => item.id !== id));
  };

  const handleToggle = (id: number) => {
    setGoals(
      goals.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  };

  return (
    <>
      <CreateGoal
        goal={goalInput}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <h3>2024년 목표 목록</h3>
      <GoalList goals={goals} onRemove={handleRemove} onToggle={handleToggle} />
    </>
  );
}

export default GoalApp;
