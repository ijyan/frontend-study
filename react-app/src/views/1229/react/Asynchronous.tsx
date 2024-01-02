import React, { useEffect, useState } from 'react';

// jsonplaceholder의 posts 데이터를 비동기함수 가져오기
// - 해당 상태를 관리
// - 화면에 렌더링

interface Post {
  id: number;
  title: string;
  body: string;
}

function Asynchronous() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts(): Promise<void> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // 강제로 에러를 발생
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  }

  useEffect(() => {
    // 컴포넌트가 마운트 될 때 데이터 불러오기
    fetchPosts();
  }, []);

  // 로딩 중 화면 표시
  if (loading) {
    return <div>Loading Posts....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h3>Posts</h3>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Asynchronous;
