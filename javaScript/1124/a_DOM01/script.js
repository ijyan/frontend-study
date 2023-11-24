/**
 * ! 문서 객체 가져오기
 * ? head, body, title 요소
 *   : document.head
 *   : document.body
 *   : document.title
 *
 * ? bodu요소 내부에서 만든 다른 요소들
 *   : querySelect(선택자)
 *   : querySelectAll(선택자)
 */

/**
 * ! 글자 조작하기
 * ? Node.textContent
 *   : 입력된 문자열을 그대로 넣습니다.
 *
 * ? Node.innerHTHML
 *   : 입력된 문자열을 HTML 형식으로 넣습니다.
 */

document.addEventListener('DOMContentLoaded', () => {
  const $textContent = document.querySelector('.textContent');
  const $innerHtml = document.querySelector('.innerHtml');

  $textContent.textContent = '<h1>textContent 속성</h1>'; // 태그도 함께 출력 '<h1>textContent 속성</h1>'
  $innerHtml.innerHTML = '<h1>innerHTML 속성</h1>'; // <h1> 태그의 스타일이 적용이 되어 innerHTML만 출력
});

/**
 * ! 속성 조작하기
 *   : 문서 객체의 속성을 조작
 *
 * ? Element.setAttribute(name, value);
 *   : 지정된 속성에 값을 설정
 *   : 속성이 있으면 값은 업데이트 된다.
 *   : 속성이 없으면 이름과 값으로 새 속성이 추가된다.
 * ? Element.getAttribute(name, value);
 *   : 특정 속성을 추출
 */
document.addEventListener('DOMContentLoaded', function () {
  const $rects = document.querySelectorAll('.rect');
  $rects.forEach((el, idx) => {
    const width = (idx + 1) * 100;
    el.style.width = `${width}px`;

    const src = `../../../img/img01.jpg`;
    // set과 getAttribute() 메소드를 사용하지 않고도
    // 해당 요소에 .속성으로 바로 읽기 가능
    // el.setAttribute('src', src);
    el.src = src;
  });
});

/**
 * ! 스타일 조작하기
 *   : 문서 객체의 스타일을 조작 시에는 style 속성을 사용
 *
 * ? 스타일 속성 지정 시 주의점
 * style 속성은 객체
 * : 해당 객체 내부에 css를 사용하여 스타일 속성을 지정
 * : 속성명의 경우 lowerCamelCase를 사용하여 표기
 * : ex) textAlign
 *
 * ? 스타일 객체 사용법
 * 주로 점 표기법을 사용한다.
 *   : h1.style.backgroundColor - 점 표기법을 사용
 *   : h1.style.['backgroundColor'] - 대괄호 표기법 사용
 *   : h1.style.['background-color'] - 대괄호 표기법에서 하이픈 사용 가능
 */
document.addEventListener('DOMContentLoaded', () => {
  const $gradiant = document.querySelectorAll('.gradiant div');
  $gradiant.forEach((div, i) => {
    const color = i * 10;
    div.style.height = '10px';
    div.style.backgroundColor = `rgba(${color}, ${color}, ${color})`;
  });
});
