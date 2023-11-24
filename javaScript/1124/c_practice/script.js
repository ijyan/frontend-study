// 이메일 형식을 확인
// input 필드에 사용자가 이메일 입력 시

// 실시간으로 이벤트를 처리(keyup)
// : 입력내용이 변경

// input 필드에 입력된 내용을 유효성 검사
// : @를 포함하고 있고 골뱅이 뒤에 마침표(온점)가 있다면 이메일로 확인
const isEmail = function (value) {
  return (value.indexOf('@') > 1)
    && (value.split('@')[1].indexOf('.') > 1);
};

document.addEventListener('DOMContentLoaded', function () {
  const $input = document.querySelector('input');
  const $p = document.querySelector('p');
  $input.addEventListener('keyup', function (e) {
    const value = event.currentTarget.value;
    if (isEmail(value)) {
      $p.style.color = 'green';
      $p.textContent = `이메일 형식 입니다.`
    } else {
      $p.style.color = 'red';
      $p.textContent = '이메일 형식이 아닙니다.';
    }
  });
});
