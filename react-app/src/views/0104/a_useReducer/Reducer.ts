// TODO 타입 정의
export interface Todo {
  id: number;
  text: string;
}

// TODO LIST 타입 정의
export interface State {
  todos: Todo[];
}

// TODO 액션 정의
// 추가, 제거, 수정
export type Action =
  | {
      type: 'ADD_TODO';
      text: string;
    }
  | { type: 'REMOVE_TODO'; id: number }
  | { type: 'EDIT_TODO'; id: number; text: string };

export const initialState: State = {
  todos: [],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TODO':
      // eslint-disable-next-line no-case-declarations
      const nextId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 0;
      return {
        ...state,
        todos: [...state.todos, { id: nextId, text: action.text }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo,
        ),
      };
    default:
      return state;
  }
}
