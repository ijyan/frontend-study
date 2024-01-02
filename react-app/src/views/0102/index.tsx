import React from 'react';
import HookReview from './a_hook_review/HookReview';
import UseMemo from './b_hooks/UseMemo';
import UseCallback from './b_hooks/UseCallback';
import ReactMemo from './b_hooks/ReactMemo';
import Mui01 from './c_MUI/Mui01';

function Index() {
  return (
    <>
      <h1>리액트 훅 복습</h1>
      <HookReview />

      <h1>Hooks(useMemo, useCallback)</h1>
      <UseMemo />
      <UseCallback />
      <ReactMemo />

      <h1>MUI 사용 방법</h1>
      <Mui01 />
    </>
  );
}

export default Index;
