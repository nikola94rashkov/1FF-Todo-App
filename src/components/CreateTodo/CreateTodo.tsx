import { Button, Field, TextField } from 'components/FormComponents';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Task } from 'types';

export const CreateTodo: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<Date>();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newListData = {
      title: formData.get('titletodolist'),
      completed: false,
      tasks,
    };

    localStorage.setItem('todosList', JSON.stringify(newListData));
  };

  const handleClick = () => {
    const task = {
      id: Date.now(),
      title,
      description,
      deadline,
      createdAt: new Date(),
      completed: false,
      disabled: false,
    };
    setTasks([...tasks, task]);

    setDescription('');
    setTitle('');
  };

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <Field type="text" label="Todo list title" placeholder="Add todo list title" id="titletodolist" />

      <fieldset>
        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          type="text"
          id="title"
          value={title}
          label="Add Title"
        />

        <TextField
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          id="description"
          value={description}
          label="Add description"
        />

        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDeadline(new Date(`${e.target.value}`))}
          type="date"
          id="deadline"
          label="Add deadline date"
        />

        <Button onClick={handleClick} type="button">
          Add new Task
        </Button>
      </fieldset>

      <Button>Create Todo List</Button>
    </form>
  );
};
