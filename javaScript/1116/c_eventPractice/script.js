let $btnAdd = document.querySelector('.btn-add');
let $todoInput = document.querySelector('.todo-input');
let $todoList = document.querySelector('.todo-list');

$btnAdd.addEventListener('click', function () {
  let newItem = document.createElement('li');
  newItem.textContent = $todoInput.value;
  newItem.classList.add('todo-item');
  $todoList.appendChild(newItem);
  $todoInput.value = '';
});

// 리스트 클릭 시 '완료' 상태를 토글
$todoList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
});
