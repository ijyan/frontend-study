export {};
// ! 배열의 반복문
const arr = [1, 2, 3, 4, 5];

// ? for문
console.log('for문');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ? forEach 메소드
console.log('forEach');
arr.forEach((v) => console.log(v));

// ? map 메소드
console.log('map');
const tmp = arr.map((v) => v ** 2);
console.log(tmp);

// ? for...of
// : ES6 도입된 방법, 배열의 각 요소에 접근 가능
// : 코드가 간단하고 배열의 각 요소를 순차적으로 접근
// : 일반적인 for문과 동일하게 배열의 요소를 각각 하나씩 뽑아옴
// > 일반 for문과의 차이점 - 배열의 인덱스에 접근할 수 X
console.log('for...of');
for (const num of arr) {
  console.log(num);
}

// ? for...in
// : 객체의 모든 열거 가능한 속성을 순회
// : 배열 뿐만 아니라 객체에서도 사용 가능
interface Student {
  [key: string]: string | number;
}
const student: Student = {
  name: 'kja',
  height: 180,
  job: 'developer',
};
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
