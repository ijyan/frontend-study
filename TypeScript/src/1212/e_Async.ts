// ! Async와 Await
// : 프로미스를 기반으로 비동기 작업을 보다 간편하게 작성하는 방법
// async 함수 내에서 await 키워드를 사용하여 비동기 작업의 결과를 기다림

// ? 사용방법
// async 함수 내부에서만 await를 사용 할 수 있다.
// : await은 프로미스 결과를 기다리는데 사용
// : 동기 코드와 유사한 형태로 비동기 코드를 작성

import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com';

// 함수가 비동기적으로 동작함을 나타냄
async function fetchAsyncUserData() {
  // 정상적으로 실행되는 코드 블럭
  // try...catch 블록을 사용하여 await 표현식에서 발생할 수 있는 예외를 캡쳐
  try {
    const response = await fetch(`${url}/user/3`);
    const data = await response.json();
    console.log('사용자 데이터: ', data);
  } catch (error) {
    console.error('에러: ', error);
  }
}

fetchAsyncUserData();

// 비동기 코드의 타입 안전성
interface UserData {
  id: number;
  name: string;
  [key: string]: any;
}

async function fetchData(): Promise<UserData> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('데이터 요청 실패');
  }
  return (await response.json()) as UserData;
}

fetchData()
  .then((data) => console.log('사용자 데이터:', data))
  .catch((error) => console.error('오류:', error));

// 실제 비즈니스 요구에 대한 비동기 처리 코드
// : 게시물을 페이지벨로 불러오기
// 페이지 번호와 페이지당 게시물의 수를 인자로 받는 비동기 함수 정의
// : 한 페이지당 게시물의 수는 기본값 10으로 설정
async function fetchPostsByPage(
  page: number,
  limit: number = 10,
): Promise<any[]> {
  try {
    const response = await fetch(`${url}/posts?_page=${page}&_limit=${limit}`);

    // 응답 상태가 'ok'가 아닐 경우 - 에러
    if (!response.ok) {
      throw new Error('데이터 요청 실패');
    }
    return await response.json();
  } catch (error) {
    console.error('오류: ', error);
    return [];
  }
}

// 함수 호출
// then을 사용하여 비동기 작업이 완료된 후에 기시물을 콘솔에 출력
fetchPostsByPage(1, 1).then((posts) =>
  console.log('페이지 1의 게시물: ', posts),
);
