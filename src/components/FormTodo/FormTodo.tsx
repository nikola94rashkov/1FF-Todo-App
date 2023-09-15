import { Button, Field, TextField } from 'components';
import { useTodo } from 'context';
import { useEffect, useState } from 'react';
import { Task } from 'types';
import './FormTodo.scss';

type Props = {
  task?: Task;
};

export const FormTodo: React.FC<Props> = ({ task }) => {
  const { dispatch } = useTodo();

  const [id, setId] = useState<number>(Date.now());
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<Date>(new Date());

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
      setDisabled(task.disabled);
      setDeadline(task.deadline);
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed,
      disabled,
      deadline,
      createdAt: new Date(),
    };

    const EditedTask: Task = {
      ...newTask,
      id,
    };

    if (task) {
      dispatch({ type: 'EDIT_TASK', payload: EditedTask });
    } else {
      dispatch({ type: 'ADD_TASK', payload: newTask });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__body">
        <Field
          type="text"
          id="title"
          label="Title*"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <TextField
          id="description"
          label="Description*"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Field
          type="date"
          id="deadline"
          label="Deadline"
          value={deadline.toISOString().slice(0, 10)}
          onChange={(e) => setDeadline(new Date(e.target.value))}
        />

        <Field
          type="checkbox"
          id="completed"
          label="Completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />

        <Field
          type="checkbox"
          id="disabled"
          label="Disabled"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>

      <div className="form__actions">
        <Button type="submit">{task ? 'Edit' : 'Create'} Task</Button>
      </div>
    </form>
  );
};