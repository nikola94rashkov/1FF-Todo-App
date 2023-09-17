import { ReactNode } from 'react';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  disabled: boolean;
  deadline: Date;
  createdAt: Date;
}
export interface Todo {
  completed: boolean;
  title: string;
  tasks: Task[];
}

export interface ITodoProvider {
  children: ReactNode;
}

export type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK_COMPLETE'; payload: Task }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'TOGGLE_COMPLETED'; payload: boolean }
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_STATE'; payload: Todo };
