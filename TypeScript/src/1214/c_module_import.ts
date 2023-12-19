// b_module.ts에서 정의된 add, subtract 함수를 사용
import Calc, { add } from './b_module';

// import 시 중괄호를 제외하는 경우 default 기능임을 자동으로 인식
// : default 기능은 이름을 사용하는 파일에서 임의지정이 가능

console.log(add(4, 5));
const calc = new Calc();
console.log(calc.add(1, 2));
