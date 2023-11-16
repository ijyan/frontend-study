// 사용자 정보가 담긴 배열을 특정 조건에 만족하는 사용자들의 이름을 지연된 시간 후에 콘솔에 출력

// 객체 내부의 값에 접근하고 싶은 경우 마침표를 사용하여 접근
const users = [
  {name: 'A', age: 25, isActive: true},
  {name: 'B', age: 30, isActive: false},
  {name: 'C', age: 35, isActive: true},
  {name: 'D', age: 40, isActive: false},
  {name: 'E', age: 45, isActive: true},
]

/**
 * isActive가 true인 사용자들만 필터링
 * 필터링된 사용자들의 name을 추출
 */

users.filter(user => user.isActive)
  .map(user => user.name)
  .forEach(name => {
    setTimeout(() => {
      console.log(name);
    }, 4000);
  });
