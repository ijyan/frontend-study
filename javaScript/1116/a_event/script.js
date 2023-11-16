// ! JS 이벤트

/**
 * ! 이벤트 정의
 *   : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미
 *   : 예) 사용자가 버튼 클릭, 웹 페이지가 로드, input 필드에 입력하는 것 등
 */

/**
 * ! 이벤트 핸들링
 *   : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
 *   : 이벤트 핸들러(이벤트 리스너)는 특정 이벤트가 발생했을 때 호출되는 함수
 *   : 예) '사용자가 버튼을 클릭'했을 때 'alert 창이 실행'되도록 작성
 */

// ! 이벤트 핸들러 등록 방법
/**
 * ? 1. html 이벤트 핸들러 속성
 *   : html 요소에 직접 onclick, onload, onchange 등의 이벤트 핸들러 속성을 설정하는 방법
 *
 * ? on 키워드: 솟성에 함수를 할당해서 이벤트를 연결
 * - onclick: 참조된 html에 클릭이벤트가 발생할 경우 실행
 * - ondblclick: 더블 클릭되었을 때 실행
 * - onfocus: 포커스 되었을 때 실행(tab 사용 시 포커스)
 * - onblur: 포커스가 해제되었을 때 실행
 *
 * ? 키보드 이벤트 핸들러
 *   : 전체 브라우저를 나타내는 window에 등록해야 한다.
 * - window.onkeydown: 키보드에서 키가 눌렸을 때 실행
 * - window.onkeyup: 키보드에서 키가 떼어졌을 때 실행
 *
 * - onmouseover, onmouseout: 각각 마우스 포인터가 버튼 위에 올라가 있을 때, 포인터가 버튼에서 벗어났을 때 실행
 *
 * 대부분의 이벤트 핸들러의 경우 모든 요소에서 사용 가능하지만, 몇몇의 경우에는 특수한 상황에서만 사용 가능
 * 예) onplay: 재생을 하는 이벤트 핸들러
 *    >> 위의 이벤트 핸들러는 video와 같은 특정한 요소에서만 사용 가능
 */

const $btn = document.querySelector('.btn-html');
/**
 * @param number 1 ~ number
 * @returns {number} 1부터 파라미터의 숫자까지 랜덤 값 반환
 */
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

$btn.onclick = function () {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = randomColor;
};

/**
 * ? 2. 인라인 이벤트 핸들러
 *   : 사용하지 않는 것을 권장
 *   : 코드를 파싱(분석)하기가 어려워지고 유지보수에 어려움이 있음.
 */
function bgChange() {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = randomColor;
}

const $btns = document.querySelectorAll('.btn');
$btns.forEach((btn) => {
  btn.onclick = bgChange;
  console.log(`click ${btn}`);
})

/**
 * ? 3. addEventListener
 *   : 표준 이벤트 모델
 *   : Html요소의 addEventListener 메서드를 사용하여 이벤트 핸들러를 등록하는 방법
 *   : 한 요소에 여러가지
 *
 *   두 가지 매개변수
 *   - 첫 번째 매개변수: 이벤트 유형(등록하고자 하는 이벤트 이름 / 예 - click, load, input 등)
 *   - 두 번째 매개변수: 이벤트 핸들러 함수
 */
// $btn.addEventListener('click', () => {
//   const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = randomColor;
// });
/**
 * ? 4. removeEventListener()
 *   : addEventListener 이벤트 제거
 */
// $btn.removeEventListener('click', bgChange);
