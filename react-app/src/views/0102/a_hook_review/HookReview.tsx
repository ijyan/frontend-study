import React, { useEffect, useState } from 'react';

// 사진 객체 정의를 위한 인터페이스
interface Photo {
  id: number;
  title: string;
}

function HookReview() {
  // 사진 목록을 저장하는 상태
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editTitle, setEditTitle] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newPhotoTitle, setNewPhotoTitle] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 20)));
  }, []);

  /**
   * 새 사진을 추가
   */
  const addPhoto = (): void => {
    const newPhoto: Photo = {
      id: Math.max(...photos.map((photo) => photo.id), 0) + 1,
      title: newPhotoTitle,
    };
    setPhotos([...photos, newPhoto]);
    setNewPhotoTitle('');
  };

  /**
   * 특정 사진의 수정
   * @param {Photo} photo
   */
  const startEdit = (photo: Photo) => {
    setEditingId(photo.id);
    setEditTitle(photo.title);
  };

  /**
   * 사진 수정 완료
   */
  const editPhoto = (): void => {
    // 사진 수정 완료 시 렌더링 된 사진 배열의 요소를 변경
    setPhotos(
      photos.map((photo) =>
        photo.id === editingId ? { ...photo, title: editTitle } : photo,
      ),
    );
    setEditTitle('');
    setEditingId(null);
  };

  /**
   * 사진 삭제
   * @param {number} id
   */
  const deletePhoto = (id: number): void => {
    setPhotos(photos.filter((item) => id !== item.id));
  };

  /**
   * 검색어에 따라 필터링된 사진 목록 생성
   * @type {Photo[]}
   */
  const filteredPhotos: Photo[] = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search Photos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr />
      <input
        type="text"
        placeholder="Add New Photo Title"
        value={newPhotoTitle}
        onChange={(e) => setNewPhotoTitle(e.target.value)}
      />
      <button type="button" onClick={addPhoto}>
        Add Photo
      </button>
      <hr />
      {editingId !== null && (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button type="button" onClick={editPhoto}>
            Save Edit
          </button>
        </div>
      )}

      <ul>
        {filteredPhotos.map((item) => (
          <li key={item.id}>
            {item.id === editingId ? (
              `Editing: ${item.title}`
            ) : (
              <>
                {item.title}
                <button type="button" onClick={() => startEdit(item)}>
                  Edit
                </button>
                <button type="button" onClick={() => deletePhoto(item.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HookReview;
