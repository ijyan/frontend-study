// ! forEach()

/**
 * array_callback() 메소드
 * : 배열이 가지고 있는 함수로써 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출
 * : 순회 메소드, 배열의 각 요소에 대해서 제공된 callback 함수를 오름차순 인덱스 순서로 한 번씩 호출
 */

/**
 * 배열이 가지고 있는 메소드 중에서, 콜백 함수를 활용하는 메소드의 형태
 * : function (value, index, array) {}
 */
const members = [123, 45, 67, 23, 90];
members.forEach((value, index) => {
  console.log(`${index}번째 요소: ${value}`);
})

/**
 * ! map()
 *   : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만드는 함수
 */

let numbers = [274, 43, 103, 32, 45];

numbers = numbers.map(v => v ** 2);
numbers.forEach(console.log);

/**
 * ! filter()
 *   : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수
 */
const filters = [0, 1, 2, 3, 4, 5];
const evenNumbers = filters.filter(v => !(v % 2));
console.log(evenNumbers);
