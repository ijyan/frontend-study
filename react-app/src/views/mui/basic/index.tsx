import React from 'react';
import { Button, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ! MUI 테마 및 디자인 정의
 * createTheme 함수를 사용하여 사용자 정의 테마
 * ThemeProvider 컴포넌트를 사용하여 메인 컴포넌트에게 전달
 * : App 컴포넌트
 */

export const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb', // 밝은 버전의 기본
      main: '#556cd6', // 기본 색상
      dark: '#303f9f', // 어두운 버전의 기본
      contrastText: '#fff', // 대비되는 텍스트 색상
    },
    secondary: {
      light: '#33ab9f',
      main: '#19857b',
      dark: '#00695f',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Pretendard',
    fontSize: 16,
    h1: {
      fontSize: '2.2rem',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'Pretendard',
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // 모든 버튼에 적용될 파일
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
  },
  // 반응형 디자인
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

/**
 * ! 스타일 커스터마이징
 * sx 속성
 * : MUI 컴포넌트의 스타일을 변경 속성
 * : 개별 컴포넌트에 사용자 정의 스타일 적용
 *
 * - 일반적인 스타일 지정
 *   : 카멜 케이스(camelCase) 사용
 * - Box Model 관련 공간 지정
 *   : 유틸리티 속성
 *     - bgcolor(색상 변환)
 *     - m(margin), mt(margin-top), mb(margin-bottom), ml(margin-left)
 *     - p(padding)
 */

function Index() {
  return (
    <>
      <Box style={{ margin: theme.spacing(2) }}>
        안녕
        <Typography variant="h1" color="primary.dark">
          안녕하세요 MUI 입니다.
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          Material UI를 사용한 예제입니다.
        </Typography>
        <Button variant="contained" color="primary">
          클릭하세요
        </Button>
        <Button variant="outlined" color="secondary">
          클릭하세요
        </Button>
      </Box>
      {/* sx 속성 사용 */}
      <Box
        sx={{
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
          width: 100,
          borderRadius: 8,
          padding: 2,
          '@media (min-width: 600px)': { width: 250, fontSize: 32 },
          '&:hover': { bgColor: 'primary.light' },
        }}
      >
        This is a box
      </Box>
    </>
  );
}

export default Index;
