/**
 * ! Context 생성
 * : React.createContext(기본값) 함수를 사용하여 새로운 Context 생성
 *
 * ! 생성된 Context에 값을 제공하기 위해서
 * Context.Provider 컴포넌트를 사용
 * : 해당 컴포넌트는 value 속성을 통해 전달되는 값을 자식 컴포넌트가 접근할 수 있도록 관리
 */

import { createContext, useContext } from 'react';

export type Theme = 'lightblue' | 'pink';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultThemeContext: ThemeContextType = {
  theme: 'lightblue', // 기본 테마 값 설정
  toggleTheme: () => {}, // 빈 함수로 초기화
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export const useBackgroundColor = () => useContext(ThemeContext);
