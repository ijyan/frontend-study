import React from 'react';
import { useBackgroundColor } from './ThemeContext';

/**
 * ! 전역 상태
 * : 프로젝트 전체에 영향을 끼치는 상태
 *
 * 전역 상태 관리 툴
 * Context API, redux, mobX, zustand 등
 *
 * ? Context API
 * : react에서 제공하는 전역 상태 관리 툴
 *
 * 1. Context 생성 및 설정
 *    ThemeContext.ts 생성
 */

function ContextApi01() {
  // useContext 훅을 사용하여 ThemeContext의 값을 가져옴
  const { toggleTheme } = useBackgroundColor();
  if (!toggleTheme) return null;

  return (
    <button type="button" onClick={toggleTheme}>
      Click
    </button>
  );
}

export default ContextApi01;
