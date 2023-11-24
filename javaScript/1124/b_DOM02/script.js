/**
 * ! 문서 객체 생성
 *
 * ? createElement()
 *   > document.createElement(문서 객체명);
 *   : 문서 객체 생성 후에 '배치'
 *   배치는 트리구조로 전달
 *   : 어떤 문서 객체가 있을 때 위에 있는 것을 '부모'
 *   : 아래에 있는 것을 '자식'이라고 부른다.
 *
 *  ? appendChild()
 *    : 지정한 부모 객체 아래에 자식 객체 추가
 *    > 부모객체.appendChild(자식 객체)
 */
document.addEventListener('DOMContentLoaded', () => {
  const $h1 = document.createElement('h1');
  $h1.textContent = '안녕하세요!';
  $h1.setAttribute('data-custom', '사용자 정의 속성');
  $h1.style.backgroundColor = 'black';
  $h1.style.color = 'white';
  document.body.appendChild($h1);
});

/**
 * ! 문서 객체 이동
 * ? appendChilde()
 *   : 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
 *   : 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild() 메소드는 노드를 현재 위치에서 새로운 위치로 이동시킨다.
 *   : 한 노드가 문서상의 두 지점에 동시에 존재할 수 없다.
 *   : 이미 부모를 가지고 있다면 우선 삭제되고 새로운 위치로 이동한다.
 */
document.addEventListener('DOMContentLoaded', function () {
  const $first = document.querySelector('.first');
  const $second = document.querySelector('.second');

  const h1 = document.createElement('h1');
  h1.textContent = '이동하는 h1 태그';

  // 서로 번갈아가면서 실행하는 함수
  const toFirst = function () {
    $first.appendChild(h1);
    setTimeout(toSecond, 1000);
  };
  const toSecond = function () {
    $second.appendChild(h1);
    setTimeout(toFirst, 1000);
  };
  toFirst();
});

/**
 * ! 문서 객체를 제거
 *
 * ? 제거 방법
 * > 부모객체.removeChild()
 * : appendChild() 메소드 등으로 이미 부모 객체와 연결이 완료된 문서 객체의 경우
 * : `parentNode` 속성으로 부모 객체에 접근 가능
 * : 해당 부모 객체의 자식 요소를 제거할 수 있다.
 * > 문서객체.parentNode.removeChild(문서 객체)
 */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const $remove = document.querySelector('.remove');
    document.body.removeChild($remove);
  }, 3000);
});
