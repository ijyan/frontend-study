/**
 * ! DOM 문서 객체 모델
 *
 * DOM(문서 객체 모델) 정의
 * : 웹 페이지의 콘텐츠 및 구조, 스타일 요소를 구조화 시켜 표현
 * : >> 해당 문서에 접근하여 읽고 조작할 수 있도록 하는 인터페이스
 *
 * DOM의 동작 방식
 * 1. 웹 브라우저가 HTML 문서를 로드한 후, 이를 DOM으로 변환
 * 2. 해당 DOM은 웹 페이지의 구조를 트리 형식으로 표현
 *
 * DOM 트리
 * 노드(Node): DOM의 기본 구성 요소
 * 요소 노드(Element Node): HTML 태그
 * 텍스트 노드(Text Node): 요소 내의 텍스트
 * 속성 노드(Attribute Node): 요소의 속성
 *
 * JS에서의 DOM 조작
 * 1. JS에서 DOM 접근(선택)
 *
 * ? 기본 메소드를 사용한 요소 선택
 * - getElementById(id 속성을 사용한 단일 요소 선택) - 요소 1개 반환
 * - getElementsByClassName(class 이름을 이용해 요소 집합을 선택) - 요소의 배열이 반환
 * - getElementsTagName(태그 이름을 이용해 요소 집합을 선택) - 요소의 배열이 반환
 *
 * ? 쿼리 선택자를 사용
 * - querySelector(CSS 선택자를 이용한 단일 요소 선택) - 첫 번째 요소
 * - querySelectorAll(CSS 선택자를 사용해 일치하는 모든 요소를 선택)
 */
const elementById = document.getElementById('first-dom');
const elementById2 = document.getElementById('second-dom');
const elementsByClassName = document.getElementsByClassName('para');
const elementsByTagName = document.getElementsByTagName('div');
const querySelector = document.querySelector('.para');
const querySelectorAll = document.querySelectorAll('.para');

/**
 * 2. DOM 요소 조작
 * textContent
 * : 요소의 텍스트 내용을 가져오거나 설정
 *
 * innerHTML
 * : 요소의 HTML 내용을 가져오거나 설정
 *
 * style 속성
 * : 요소의 인라인 스타일을 직접 조작
 * : css 속성을 js 속성으로 변환
 * : >> camelCase 사용
 *
 * classList
 * : 요소의 클래스 목록을 조작
 * : add(추가), remove(제거), toggle(반전), contains(포함)
 *
 * 속성값 설정, 제거
 * setAttribute
 * : 요소에 새로운 속성을 설정, 기존 속성을 변경
 * removeAttribute
 * : 요소에 특정 속성을 제거
 * 인자: 제거할 속성의 이름
 */
elementById.textContent = '새로운 텍스트를 추가합니다.';
elementById2.innerHTML = '<strong>중요한 내용입니다.</strong>';
elementById.style.backgroundColor = 'lightblue';
elementById2.style.fontSize = '20px';

elementById.setAttribute('class', 'divs');
elementById2.setAttribute('class', 'divs');
const divs = document.querySelectorAll('.divs');
divs.forEach((el) => {
  el.style.border = '2px solid #333';
  el.style.margin = '10px';
  el.style.padding = '10px';
  el.style.textAlign = 'center';
});

elementById.removeAttribute('class', 'divs');
