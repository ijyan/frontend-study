import { Outlet } from 'react-router-dom';
// 파일명을 index로 지정하는 경우
// : 웹 페이지 메인 파일 - 해당 파일이 존재하는 디렉토리(폴더)의 기본(메인) 파일임을 파일명으로 알려줌.

import { createGlobalStyle } from 'styled-components';
import ThemeProvider from './views/0105/a_contextAPI/ThemeProvider';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0; padding: 0; box-sizing: border-box;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
