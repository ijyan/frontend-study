// 아이템들을 저장할 배열
let items = [];

/**
 * 새 아이템 생성
 */
const createItem = function () {
  const $input = document.querySelector('input');
  const text = $input.value.trim();
  if (text.trim()) {
    items.unshift(text);
  }
  $input.value = '';
  renderItems();
};

/**
 * 아이템 삭제
 * @param e 이벤트
 */
const deleteItem = function (e) {
  const list = [...e.target.parentElement.children];
  const idx = list.indexOf(e.target);
  items = items.filter((v, i) => i !== idx);
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
    li.addEventListener('click', deleteItem);
    $itemList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  const $btnAdd = document.querySelector('.btn-add');
  $btnAdd.addEventListener('click', createItem);
});

