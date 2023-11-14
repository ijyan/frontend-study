/**
 * ! 배열
 * 
 * 정의
 * : 여러 데이커 요소를 순서대로 저장하는 자료 구조
 * : 같은 타입이 아닌 여러 값들(여러 개의 변수)을 담을 수 있는 리스트 형태의 객체
 */

/**
 * ! 배열의 특징
 *   : 순서가 있는 데이터의 목록
 *   : >> 각 데이터의 위치를 인덱스로 결정
 */

/**
 * ! 배열의 사용 목적
 *   : 사용자 목록 관리, 데이터 일괄 처리
 *   : 데이터의 집합을 효율적으로 관리
 *   : 코드의 재사용 및 유지 보수 용이
 */


// ! 배열 생성 및 초기화
// ? 1. 배열 리터럴 형식
//      : 대괄호([])를 사용하여 생성, 내부의 값을 쉼표(,)로 구분하여 입력
//      : 쉼표를 통해 구분되는 각각의 데이터는 요소
//      : 요소 - 배열 내부에 들어 있는 값
let emptyArray = []; // 빈 배열
let numbers = [1, 2, 3, 4, 5]; // 같은 데이터 타입
let mixedTypes = [1, 'two', false, [5, 6]]; // 다양한 데이터 타입
console.log(mixedTypes);

// ? 2. Array 생성자 형식
// new Array() 구문을 사용하여 배열을 생성
let arrayWithNew = new Array('apple', 'banana', 'orange');
console.log(arrayWithNew);

// Array 생성자의 특징
// : 한 개의 숫자 인자를 가지는 경우
// : >> 해당 숫자만큼의 길이를 가진 빈 배열을 생성
let arrayLengthTwo = new Array(2);
let arrayHasTwo = new Array('2');
console.log(arrayLengthTwo); // 길이가 2인 빈 배열
console.log(arrayHasTwo); // '2'라는 하나의 요소를 포함하는 배열을 생성

// ! 배열 조작 및 접금
let fruits = ['apple', 'banana', 'orange'];

// ? 1. 배열 요소에 접근(인덱싱)
// : 배열의 각 요소는 숫자 인덱스를 통해 접근 가능
// 배열명[인덱스번호]
console.log(fruits[1]);

// ? 2. 배열의 길이(length): 배열의 길이를 반환
console.log(fruits.length); // 3

// ? 3. 다차원 배열의 요소 접근
// 다차원 배열
// : 배열 내에 다른 배열을 포함하는 구조.
// : 데이터를 행렬 또는 그리드 형태로 표현할 때 사용
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[0]);

// ! 배열의 메소드
// ? 1. push(), pop()
// : 배열의 끝에 요소를 추가, 제거
let cars = ['bmw', 'audi'];
cars.push('hyundai');
// 인덱스를 사용하여 배열 뒷부분의 특정 위치에 요소 추가
cars[7] = 'kia';
console.log(cars);

cars[cars.length] = 'toyota';
console.log(cars);

// 요소 제거
// pop() 메소드의 경우 마지막 요소를 제거하고 그 값을 반환
let lastCar = cars.pop();
console.log(lastCar); // toyota
console.log(cars);

// ? 2. shift() & unshift()
// shift()
// : 배열의 첫 번째 요소를 제거하고 그 요소를 반환

// unshift()
// : 배열의 시작에 새로운 요소를 추가

let carsShift = cars.shift();
console.log(carsShift); // bmw
console.log(cars);

cars.unshift('newBMW'); // 시작에 추가
console.log(cars);

// ? 3. slice() & splice() 메소드
// splice()
// : 배열의 기존 요소를 삭제 또는 교체
// : 새 요소를 추가하여 배열의 내용을 변경
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
console.log(cars); // ['newBMW', 'audi', 'hyundai', empty × 4, 'kia']
let removedElements = cars.splice(3, 4, 'jeep', 'volvo');
console.log(removedElements); // [empty × 4]
console.log(cars); // ['newBMW', 'audi', 'hyundai', 'jeep', 'volvo', 'kia']

// slice()
// : 배열의 특정 부분을 새 배열로 반환
// : 원본 배열은 변경 X
// array.slice(start, end);
let sliceCars = cars.slice(1, 4);
console.log(sliceCars); // ['audi', 'hyundai', 'jeep']
console.log(cars); // 배열 변경 X

// ? 4. concat() & join() & split()
// concat(): 배열을 결합
// join(): 문자열로 변환
let moreCars = ['tayo', 'tomas'];
let combinedCars = cars.concat(moreCars);
console.log(combinedCars);

let carString = combinedCars.join(', ');
console.log(carString);

// split(): 문자열로 이루어진 데이터를 정제하여 배열의 형태로 나타낼 때 사용
let myData = 'Seoul, Busan, Daejeon';
console.log(myData.split(', '));
