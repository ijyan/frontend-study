import React, { useContext } from 'react';
import UseReducer01 from './a_useReducer/UseReducer01';
import UseReducer02 from './a_useReducer/UseReducer02';
import CustomHook01 from './b_customHookl/CustomHook01';
import Framework from './c_style-framework/Framework';
import { ThemeContext } from '../0105/a_contextAPI/ThemeContext';

function Index() {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;
  const backgroundColor = theme === 'lightblue' ? 'pink' : 'lightblue';

  return (
    <div style={{ backgroundColor }}>
      <button onClick={toggleTheme} type="button">
        Toggle Theme
      </button>
      <h2>useReducer</h2>
      <UseReducer01 />
      <hr />
      <UseReducer02 />
      <h2>Custom Hook</h2>
      <CustomHook01 />
      <h2>리액트 CSS 프레임워크</h2>
      <Framework />
    </div>
  );
}

export default Index;
