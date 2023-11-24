const $input = document.querySelector('input');
const $btnAdd = document.querySelector('.btn-add');
// 아이템들을 저장할 배열
let items = [];

/**
 * 새 아이템 생성
 */
const createItem = function () {
  const text = $input.value.trim();
  if (text) {
    // items.unshift(text);
    items = [text, ...items];
  }
  $input.value = '';
  renderItems();
};

/**
 * 아이템 삭제
 * @param e 이벤트
 */
const deleteItem = function (idx) {
  items = items.filter((_, i) => i !== idx);
  renderItems();
};

/**
 * 아이템 목록을 렌더링
 */
const renderItems = function () {
  const $itemList = document.querySelector('.item-list');
  $itemList.innerHTML = '';
  items.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.onclick = () => deleteItem(idx);
    $itemList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  $input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      createItem();
    }
  });
});

