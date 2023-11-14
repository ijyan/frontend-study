// ! 사용자 목록
document.addEventListener('DOMContentLoaded', function () {
  let users = [
    {name: '사용자 1', email: 'user1@example.com', age: '24'},
    {name: '사용자 2', email: 'user2@example.com', age: '30'}
  ];

  let $userList = document.querySelector('.user-list');

  users.forEach((user) => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `<h2>이름: ${user.name}</h2>
<p>이메일: ${user.email}</p>
<p>나이: ${user.age}</p>`;

    $userList.appendChild(userDiv);
  });
})

// ! 최신 검색목록을 보여주는 검색
document.addEventListener('DOMContentLoaded', function () {
  const $searchBox = document.querySelector('#search-box');
  const $searchButton = document.querySelector('#search-button');
  const $searchList = document.querySelector('#search-list');
  let recentSearches = [];

  /**
   * 최신 항목 나열
   */
  const updateSearchList = function () {
    $searchList.innerHTML = '';
    recentSearches.forEach((term) => {
      const listItem = document.createElement('li');
      listItem.textContent = term;
      $searchList.appendChild(listItem);
    })
    console.log($searchList.innerHTML);
  }

  $searchButton.addEventListener('click', function () {
    const searchTerm = $searchBox.value;

    if (searchTerm.trim() !== '') {
      recentSearches.unshift(searchTerm);
    }

    if (recentSearches.length > 5) {
      recentSearches.pop();
    }
    updateSearchList();
    $searchBox.value = '';
  });
})
