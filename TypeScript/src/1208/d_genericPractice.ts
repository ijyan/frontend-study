// ! 제네릭, 클래스, 배열 메서드를 이용한 회원 관리 프로그램

// 요구사항 정리
// ? 회원 정보
// 회원 정보는 name(이름), age(나이), active(활성 상태)의 속성을 가짐.
// ? 회원 관리 프로그램
// : 회원을 추가 (addMember), 검색(findMember), 제거(removeMember), 활성 회원만 필터링(filterActiveMember)하는 기능을 제공

// 회원 정보를 관리하기 위한 Member 클래스 정의
class Member {
  constructor(
    public name: string,
    public age: number,
    public active: boolean = true,
  ) {}
}

// 회원 관리 기능을 제공하는 Membership 클래스 정의
// : 제네릭을 사용하여 정의
// : Member 객체의 리스트를 관리
class Membership<T extends Member> {
  private members: T[] = [];

  // 새로운 회원 추가 메소드
  addMember(member: T) {
    this.members.push(member);
  }

  // 특정 이름을 가진 회원을 찾아 반환하는 메소드
  // : 해당하는 회원이 없는 경우 >> undefined
  findMember(name: string): T | undefined {
    return this.members.find((member) => member.name === name);
  }

  // 특정 이름을 가진 회원을 members 배열에서 제거하는 메소드
  removeMemeber(name: string) {
    const index = this.members.findIndex((member) => member.name === name);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  // active가 true인 회원만을 필터링
  filterActiveMembers(): T[] {
    return this.members.filter((member) => member.active);
  }
}

const membership = new Membership<Member>();
// 멤버 추가
membership.addMember(new Member('lka', 29));
membership.addMember(new Member('ldk', 40, false));
// 멤버 찾기
console.log(membership.findMember('ldk'));

const activeMember = membership.filterActiveMembers();
// 활성 멤버
console.log(activeMember);

// 멤버 제거
membership.removeMemeber('lka');
console.log(membership.findMember('lka')); // undefined
