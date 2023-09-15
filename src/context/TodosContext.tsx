import { Dispatch, FC, createContext, useContext, useEffect, useReducer } from 'react';
import { Action, ITodoProvider, Todo } from '../types';

const LOCAL_STORAGE_KEY = 'todo';

const initialStateData: Todo = {
  completed: false,
  title: 'TodoList',
  tasks: [],
};

const reducer = (state: Todo, action: Action): Todo => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    case 'TOGGLE_TASK_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        completed: action.payload,
      };
    case 'SET_TITLE':
      return {
        ...state,
        title: '',
      };
    case 'SET_STATE':
      return action.payload;
    default:
      return state;
  }
};

const TodoContext = createContext<{
  state: Todo;
  dispatch: Dispatch<Action>;
}>({
  state: initialStateData,
  dispatch: () => null,
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider: FC<ITodoProvider> = ({ children }) => {
  const storedTodo = localStorage.getItem(LOCAL_STORAGE_KEY);

  const initialState: Todo = storedTodo
    ? JSON.parse(storedTodo)
    : {
        ...initialStateData,
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};
