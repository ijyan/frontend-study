/**
 * ! DOM의 정의
 *
 * 문서 객체
 * : HTML 안에서는 요소라고 불리는 객체를 JS에서는 문서 객체라고 불림
 *
 * 문서 객체 모델(Document Object Model: DOM)
 * : 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있는 인터페이스
 *
 * ! DOM의 사용
 *   : JS를 사용하여 DOM에 접근하는 경우
 *   : 웹 페이지에 요소를 crud(선택, 추가, 수정, 삭제)하는데 사용할 수 있는 메소드와 속성에 접근이 가능
 *
 * ! DOMContentLoaded 이벤트
 *   : 문서 객체를 조작할 때 사용하는 이벤트
 *   : 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트
 *   : 문서 객체가 정립된 이후에 콜백함수가 실행되기 때문에 오류 방지에 이점
 */
document.addEventListener('DOMContentLoaded', function () {
  // ...
});

/**
 * ! 문서 객체 가져오기
 *
 * ? document.body
 *   : 현재 문서의 <body> 혹은 <frameset> 노드를 나타낸다.
 *   : <body> 이외에도 <head>, <title> 요소 등도 읽어올 수 있다.
 *
 * ? document.querySelect()
 *   : 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 첫 번째 element를 반환합니다.
 * ? document.querySelectAll()
 *   : 지정된 셀렉터 그룹에 일치하는 다큐먼트의 엘리먼트 리스트를 나타내는 정적 `NodeList`를 반환합니다.
 */

// document.querySelect()
document.addEventListener('DOMContentLoaded', function () {
  const $header = document.querySelector('h1');
  $header.textContent = 'HEADER ONE';
  $header.style.color = 'white';
  $header.style.backgroundColor = 'black';
  $header.style.padding = '10px 18px';
});

// document.querySelectAll()
document.addEventListener('DOMContentLoaded', function () {
  const $list = document.querySelectorAll('.list');
  $list.forEach((item, i) => {
    item.textContent = `LIST ITEM ${i}`;
    item.style.color = 'pink';
    item.style.backgroundColor = '#444';
    item.style.listStyle = 'none';
  });
});
