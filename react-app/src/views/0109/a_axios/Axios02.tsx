import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
}

export default function Axios02() {
  const [users, setUsers] = useState<User[]>();
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
  });
  const userIdRef = useRef(5);

  // 서버 메인 경로
  const API_URL = 'http://localhost:5000/users';

  // 사용자 생성
  const createUser = async () => {
    if (!newUser.username || !newUser.email) return;

    // eslint-disable-next-line no-plusplus
    const newId = ++userIdRef.current;
    try {
      // post(경로, 새로 입력되는 데이터)
      const response = await axios.post(API_URL, { id: newId, ...newUser });
      if (users) {
        setUsers([...users, response.data]);
        setNewUser({ username: '', email: '' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      if (users) {
        setUsers(users.filter((user) => user.id !== id));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        const { data } = response;
        // if (data) {
        if (JSON.stringify(data) !== JSON.stringify(users)) {
          setUsers(data);
        }
      } catch (error) {
        console.log('Error fetching users: ', error);
      }
    };
    fetchUsers();
  }, [users]);

  return (
    <div>
      <input
        type="text"
        value={newUser.username}
        name="username"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={newUser.email}
        name="email"
        onChange={handleInputChange}
      />

      <button onClick={createUser} type="button">
        Create User
      </button>

      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => deleteUser(user.id)} type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
