// ! 배열의 고급 메소드

let cars = ['audi', 'bmw', 'hyundai', 'volvo'];
// ! 반복 메소드
// forEach(): 배열의 각 요소에 대해 함수를 실행
cars.forEach((car) => {
  console.log(car);
});

// map(): 배열의 각 요소에 대해 함수를 적용하고 새로운 배열을 생성
let carsInUpperCase = cars.map((v) => v.toUpperCase());
console.log(carsInUpperCase);

// filter(): 특정 조건을 만족하는 요소만 추출하여 새배열 생성
let longNameCars = cars.filter((car) => car.length > 4);
console.log(longNameCars);

// reduce(): 배열의 각 요소에 대해 함수를 적용하여 단일 값 생성
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15

let combinedCarNames = cars.reduce((acc, cur) => acc + `, ${cur}`);
console.log(combinedCarNames);

// ! 배열 요소의 정렬과 순서 변경
// 1. sort()
//    : 배열 요소를 정렬
let num = [12, 54, 23, 17, 78, 30, 10, 1, 110, 5];
num.sort((a, b) => a - b);
console.log(num);

// 2. reverse()
//    : 배열의 요소 순서를 반대로 뒤집음.
num.reverse();
console.log(num);

//! 배열 요소의 검색 및 평가
let fruits = ['apple', 'banana', 'cherry', 'apple'];
//? 1. indexOf, lastIndexOf
// : 특정 요소의 인덱스를 찾는 메소드
let firstApple = fruits.indexOf('apple');
let lastApple = fruits.lastIndexOf('apple');
console.log(firstApple); // 0
console.log(lastApple); // 3

//? 2. find, findIndex
// : 조건을 만족하는 요소나 해당 인덱스를 찾는 메소드
numbers = [5, 4, 3, 6, 1];
let firstOverFive = numbers.find(num => num > 5);
let firstIndexOverFive = numbers.findIndex(num => num > 5);
console.log(firstOverFive); // 6
console.log(firstIndexOverFive); // 3

//? 3. toString, toLocaleString(지역 설정에 맞는 문자열로 변환-날짜)
// : 배열을 문자열로 변환
let numberString = numbers.toString();
let numberLocaleString = numbers.toLocaleString();
console.log(typeof numberString);
console.log(numberLocaleString);
