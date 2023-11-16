/**
 * ! 이벤트에 필요한 개념
 */

/**
 * ! 1. 이벤트 객체
 *   : 이벤트 핸들러가 호출될 때, 브라우저는 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
 *   : 이벤트와 관련된 여러 정보가 포함
 *   예) 마우스 이벤트 - 마우스의 위치 정보
 *   예) 키보드 이벤트 - 어떤 키가 눌러졌는지에 대한 정보
 */
const $btn = document.querySelector('.btn-change');
const $div = document.querySelector('div');


/**
 * @param number 1 ~ number
 * @returns {number} 1부터 파라미터의 숫자까지 랜덤 값 반환
 */
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

// 이벤트 객체인 e를 함수에 포함하고, 이벤트 객체의 target 프로퍼티를 사용하여 이벤트가 일어나는 버튼 그 자체에 실행
/**
 * 랜덤 컬러 생성
 * @param e 이벤트
 */
function bgChange(e) {
  const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // target 프로퍼티: 항상 이벤트가 발생된 요소에 대한 참조
  e.target.style.backgroundColor = rndColor;
}

$btn.addEventListener('click', bgChange);
$div.addEventListener('click', bgChange);

// 이벤트 객체 실습
// 각각의 타일을 클릭했을 때 클릭한 타일의 배경색 전환
const $tile = document.querySelectorAll('.tile');
$tile.forEach(item => {
  item.addEventListener('click', bgChange);
})

/**
 * ! 2. 기본 행동 방지
 * : preventDefault()
 * : a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나, 창이 새로고침하여 실행되는데 그것을 방지.
 */
const $form = document.querySelector('form');
const $formName = document.querySelector('#name');
const $formEmail = document.querySelector('#email');
const $error = document.querySelector('.error');

$form.addEventListener('submit', function (e) {
  if ($formName.value === '' || $formEmail.value === '') {
    e.preventDefault();
    $error.textContent = 'You need to fill in both name and email.';
  }
});

/**
 * ! 3. 이벤트 버블링 & 캡쳐
 *   : 같은 이벤트 타입의 두 이벤트 핸들러가 한 요소에서 작동될 때 어떠한 일이 일어나는지를 기술하는 방법
 *
 *   이벤트의 전파 특징으로
 *   : 두 가지가 충돌하는 경우 부모 요소들로 전파
 *
 *   이벤트 전파를 중지
 *   : event.stopPropagation()
 *   : 해당 메서드를 호출할 경우, 현재 이벤트 이후의 전파가 중지
 */
/**
 * ? 이벤트 버블링
 *   : 특정 요소에서 이벤트가 발생했을 때 그 이벤트가 상위의 요소들로 전달되는 현상
 *   예) HTML 페이지에서 버튼 요소가 클릭되면 버튼 요소부터 시작해서 그의 부모요소들을 거쳐서 최상위 요소까지 전달
 *
 */

/**
 * ? 이벤트 캡처링
 *   : 이벤트 버블링과 반대방향으로 이벤트가 전달되는 현상
 *   : 최상의 요소에서 시작되어 이벤트가 발생한 요소까지 이벤트 전달
 */

// 캡처링 (위에서 아래로)
document.addEventListener('DOMContentLoaded', function () {
  let $divParent = document.querySelector('#div-parent');
  let $btnChild = document.querySelector('#btn-child');

  // 캡처링
  $divParent.addEventListener('click', () => {
    // 클릭 시 'Parent Div Capturing'만 출력
    console.log('Parent Div Capturing');
  });

  $btnChild.addEventListener('click', (e) => {
    // 클릭 시 'Parent Div Capturing'과 'Child Button Capturing'이 콘솔에 출력됨.
    console.log('Child Button Capturing');
    // stopPropagation() 추가 시 'Child Button Capturing' 만 출력
    // 하위 요소에 사용
    e.stopPropagation();
  });
});
