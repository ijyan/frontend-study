const $input = document.querySelector('.numberInput');
const $p = document.querySelector('p');

/**
 * num의 제곱한 수를 반환함
 * @param num
 * @returns {number}
 */
function squared(num) {
  return num ** 2;
}

/**
 * num의 세 제곱한 수를 반환함
 * @param num
 * @returns {number}
 */
function cubed(num) {
  return num ** 3;
}

/**
 * num의 팩토리얼 값을 반환함
 * @param num 팩토리얼을 구할 숫자
 * @returns {number} num의 팩토리얼을 반환함
 */
function factorial(num) {
  if (num < 0) return;
  if (num === 0) return 1;

  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

$input.addEventListener('change', () => {
  // parseFloat(): 문자열로 입력된 값을 부동 소수점 숫자로 변환
  const num = parseFloat($input.value);

  if (isNaN(num)) {
    $p.textContent = 'You need to enter a number.';
  } else {
    $p.textContent = `${num} squared is ${squared(num)} /
      ${num} cubed is ${squared(num)} /
      ${num} factorial is ${factorial(num)}`;
  }
  $input.value = '';
})
