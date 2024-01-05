import React, { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

// ! ThemeProvider 컴포넌트 정의
// : Context의 Provider 역할
// : 자식 컴포넌트들에게 테마 상태를 제공
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('lightblue');
  const toggleTheme = () => {
    setTheme((current) => (current === 'lightblue' ? 'pink' : 'lightblue'));
  };

  // ThemeContext.Provider를 사용하여
  // theme와 toggleTheme를 자식 컴포넌트에 전달
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
