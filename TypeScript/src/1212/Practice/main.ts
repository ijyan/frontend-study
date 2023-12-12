/*
! 외부 API를 활용한 비동기 작업
- jsonplaceholder의 photos 데이터를 사용
- https://jsonplaceholder.typicode.com/photos

- 각 페이지에 photos 데이터의 사진을 4개씩 첨부
- 사진의 이름(title)은 사진 아래 작성
- 페이지 간에 이동은 버튼으로 이동

- async/await을 사용하여 작성
 */
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// 현재 페이지 변호를 추적하는 변수
let currentPage = 1;
// 페이지 당 사진 수
const photoPerPage = 4;
async function fetchPhotos(page: number): Promise<Photo[]> {
  // API로 가져온 모든 사진을 불러옴
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=1`,
  );
  const photo = (await response.json()) as Photo[];

  // 현재 페이지에 해당하는 사진들만 잘라내서 반환
  return photo.slice((page - 1) * photoPerPage, page * photoPerPage);
}

// ! 사진을 페이지에 렌더링하는 함수
function renderPhotos(photos: Photo[]) {
  // 사진을 표시할 컨테이너 불러오기
  const $photoContainer = document.querySelector(
    '.photo-container',
  ) as HTMLElement;
  // 컨테이너의 내용을 초기화
  $photoContainer.innerHTML = '';

  // 각 사진에 대해 HTML 요소 생성, 컨테이너에 추가
  photos.forEach((photo) => {
    const photoEl = document.createElement('div');
    photoEl.className = 'photo-item';
    photoEl.innerHTML = `<img src='${photo.thumbnailUrl}' alt='${photo.title}'><p>${photo.title}</p>`;
    $photoContainer.appendChild(photoEl);
  });
}
// ! '이전'버튼 클릭 이벤트 리스너 추가
// , !연산자의 경우: 해당 객체가 null 이나 undefined가 아니라고 단언하는데 사용
document.querySelector('.btn-prev')!.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePhotos();
  }
});

// ! '다음'버튼 클릭 이벤트 리스너 추가
document.querySelector('.btn-next')!.addEventListener('click', () => {
  currentPage++;
  updatePhotos();
});

// ! 사진을 업데이트하는 비동기 함수
async function updatePhotos() {
  // 현재 페이지에 해당하는 사진들을 불러오기
  const photo = await fetchPhotos(currentPage);
  renderPhotos(photo);
}

// ! 초기 사진 로드
updatePhotos();
