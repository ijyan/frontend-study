/**
 * ! 리액트 라우터: 페이지 이동 가능
 *
 * ? 라우팅
 *   : 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
 *
 * ? 설치
 * > npm install react-router-dom
 *
 * ? 프로젝트에 라우터 적용
 *   : 프로젝트 최상단인 `index.tsx`에서 `BrowserRouter`를 적용하여 자식 컴포넌트들이 라우팅 기능을 사용할 수 있도록 작성
 *
 * ? Route
 *   : 특정 주소에 컴포넌트 연결
 *   : Route 태그안에
 *     path="주소"
 *     component={보여주고 싶은 컴포넌트}
 *
 * ? Routes
 *   : 여러개의 Route를 담을 수 있는 컴포넌트로 명시
 *   : 여러 Route를 감싸서 path 속성과 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할
 */

import React from 'react';

function Route01() {
  return (
    <div>
      <h1>Router01</h1>
    </div>
  );
}

export default Route01;
