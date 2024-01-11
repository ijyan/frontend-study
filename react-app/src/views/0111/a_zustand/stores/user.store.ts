import { create } from 'zustand';

interface Member {
  id: number;
  name: string;
}

interface MemberState {
  members: Member[];
  addMember: (member: Member) => void;
  updateMember: (id: number, name: string) => void;
  deleteMember: (id: number) => void;
}

export const useMemeberStore = create<MemberState>((set) => ({
  // 초기 상태 설정
  members: [],
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),
  updateMember: (id, name) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id ? { ...member, name } : member,
      ),
    })),
  deleteMember: (id: number) =>
    set((state) => ({
      members: state.members.filter((member) => member.id !== id),
    })),
}));

interface AuthState {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
