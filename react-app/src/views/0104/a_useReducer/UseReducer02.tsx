import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './Reducer';
import { useInput } from '../hooks/useInput';

// ! useState와 useReducer의 차이
// useState: 단순한 값, 객체, 배열을 관리
// >> 컴포넌트의 로컬 상태를 선언할 때 사용

// useReducer: 복잡한 상태 로직을 관리
// >> 상태 업데이트 로직을 컴포넌트 외부에서 작성 가능 - 로직의 재사용을 가능

function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [newTodoText, setNewTodoText] = useState<string>('');
  const newTodo = useInput('');

  // const [editText, setEditText] = useState<string>('');
  const editTodoText = useInput('');

  const [isEditing, setIsEditing] = useState<number | null>(null);

  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      dispatch({ type: 'ADD_TODO', text: newTodo.value });
      // setNewTodoText('');
      newTodo.onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const editTodo = (id: number, text: string) => {
    if (editTodoText.value.trim() !== '') {
      dispatch({ type: 'EDIT_TODO', id, text: editTodoText.value });
      setIsEditing(null);
      editTodoText.value = '';
    }
  };

  return (
    <>
      <input type="text" {...newTodo} />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <input type="text" {...editTodoText} />
            ) : (
              todo.text
            )}
            {isEditing === todo.id ? (
              <button
                onClick={() => editTodo(todo.id, editTodoText.value)}
                type="button"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsEditing(todo.id);
                  editTodoText.onChange({
                    target: { value: '' },
                  } as React.ChangeEvent<HTMLInputElement>);
                }}
                type="button"
              >
                Edit
              </button>
            )}
            <button
              type="button"
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseReducer02;
