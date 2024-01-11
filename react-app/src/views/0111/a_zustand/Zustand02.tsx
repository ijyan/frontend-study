import React, { useState } from 'react';
import { useAuthStore, useMemeberStore } from './stores/user.store';

// ! 상태 정의 및 스토어 생성
// 회원 정보 상태 & 사용자 인증 상태

// ! UI 컴포넌트
// 회원 관리 컴포넌트 - 회원 목록 표시, 회원 추가, 수정, 삭제 기능
// 로그인 컴포넌트
// 홈화면 컴포넌트 - 로그인 후 보여질 홈 화면

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [username, setUserName] = useState('');

  const handelLogin = () => {
    login(username);
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="button" onClick={handelLogin}>
        Login
      </button>
    </>
  );
};

function MemberManager() {
  const { members, addMember, updateMember, deleteMember } = useMemeberStore();
  const [newMemberName, setNewMemberName] = useState<string>();
  const [editMemberNames, setEditMemberNames] = useState<{
    [id: number]: string;
  }>({});

  const handleAddMember = () => {
    if (newMemberName) {
      const newMember = { id: Date.now(), name: newMemberName };
      addMember(newMember);
      setNewMemberName('');
    }
  };

  const handleUpdateMember = (id: number) => {
    if (editMemberNames[id].trim() === '') return;
    updateMember(id, editMemberNames[id]);
    setEditMemberNames('');
  };

  return (
    <>
      <input
        type="text"
        value={newMemberName}
        onChange={(e) => setNewMemberName(e.target.value)}
        placeholder="enter new name"
      />
      <button type="button" onClick={handleAddMember}>
        Add Member
      </button>
      <ul>
        {members.map((member) => (
          <>
            <li key={member.id}>{member.name}</li>
            <input
              type="text"
              value={editMemberNames[member.id] || ''}
              placeholder="new name"
              onChange={(e) =>
                setEditMemberNames({
                  ...editMemberNames,
                  [member.id]: e.target.value,
                })
              }
            />
            <button type="button" onClick={() => handleUpdateMember(member.id)}>
              수정
            </button>
            <button type="button" onClick={() => deleteMember(member.id)}>
              삭제
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

function Zustand02() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <p>Welcome, {user}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <br />
      <MemberManager />
    </>
  );
}

export default Zustand02;
