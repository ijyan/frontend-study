import React, { useContext } from 'react';
import ContextAPI01 from './a_contextAPI/ContextAPI01';
import { ThemeContext } from './a_contextAPI/ThemeContext';
import Styled01 from './b_StyledComponents/Styled01';
import Mock01 from './c_mock/mock01';

function Index() {
  // Context API를 사용한 전역 상태관리
  // ThemeContext를 사용하여 현재 테마 상태를 가져옴
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;
  const backgroundColor = theme === 'lightblue' ? 'pink' : 'lightblue';

  return (
    <div style={{ backgroundColor }}>
      <button onClick={toggleTheme} type="button">
        Toggle Theme
      </button>
      <h1>Context API</h1>
      <ContextAPI01 />
      <h1>Styled Components</h1>
      <Styled01 />
      <h1>Mock</h1>
      <Mock01 />
    </div>
  );
}

export default Index;
