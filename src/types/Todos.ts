export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  disabled: boolean;
  createdAt: Date;
}
export interface Todo {
  completed: boolean;
  title: string;
  tasks: Task[];
}
