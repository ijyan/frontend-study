document.addEventListener('DOMContentLoaded', function () {
  const $select = document.querySelector('select');
  const $input = document.querySelector('input');
  const $span = document.querySelector('span');

  // 현재값(input 필드에 입력되는 값)
  let currentValue;
  // 변환되는 값
  let conversion = 10;

  const calculate = function () {
    $span.textContent = (conversion * currentValue).toFixed(2);
  };

  $select.addEventListener('change', function (e) {
    const idx = e.currentTarget.options.selectedIndex;
    conversion = Number(e.currentTarget[idx].value);
    calculate();
  });

  $input.addEventListener('keyup', function (e) {
    currentValue = +(e.currentTarget.value);
    calculate();
  });
});
