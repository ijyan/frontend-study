import React from 'react';
import styled, { css } from 'styled-components';

// ! Styled-components
// : JS와 CSS를 결합하는 라이브러리
// : React 컴포넌트 내부에서 CSS 코드를 작성 가능하도록 하는 기능

// ? 기본 설정 및 사용법
// 컴포넌트 생성
// 스타일컴포넌트의 styled를 임포트하고
// , HTML 태그에 해당하는 스타일 컴포넌트를 정의

const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
};

const fontSize = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.2rem',
};

const StyledButton = styled.button<{ $primary?: boolean }>`
  border: 1px solid #333;
  background-color: white;
  font-size: ${fontSize.medium};
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.$primary &&
    css`
      background: ${colors.primary};
      color: white;
      border: none;
    `}
  &:hover {
    opacity: 0.8;
  }
`;

function Styled01() {
  return (
    <>
      <StyledButton $primary>Primary Button</StyledButton>
      <StyledButton>Normal Button</StyledButton>
    </>
  );
}

export default Styled01;
