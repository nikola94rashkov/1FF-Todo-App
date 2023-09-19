import { Button, Field, FormTodo, Typography } from 'components';
import { useTodo } from 'context';
import { FC, useState } from 'react';
import { Task } from 'types';

import './TaskCard.scss';

export const TodoCard: FC<Task> = (props) => {
  const { title, completed, disabled, id, description, deadline, createdAt } = props;

  const [isEdditing, setIsEdditing] = useState<boolean>(false);

  const { dispatch } = useTodo();

  const isTaskExpiredOrDisabled = new Date().getTime() > new Date(deadline).getTime() || disabled;

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleComplete = () => {
    dispatch({ type: 'TOGGLE_TASK_COMPLETE', payload: props });
  };

  const handleEdit = () => {
    dispatch({ type: 'EDIT_TASK', payload: props });
  };

  return (
    <div className={`card card--${completed ? 'completed' : 'uncompleted'} card--${disabled ? 'disabled' : 'active'}`}>
      <div className="card__head">
        <Typography type="h6">{title}</Typography>

        <Typography type="p">{description}</Typography>
      </div>

      <div className="card__actions">
        {isTaskExpiredOrDisabled ? (
          <>
            <Typography type="p">task is expired or disabled</Typography>
            <Typography type="p">{`expired date: ${deadline}`}</Typography>
          </>
        ) : (
          <Field
            id={String(id)}
            checked={completed}
            onChange={toggleComplete}
            type="checkbox"
            label={completed ? 'Uncomplete' : 'Complete'}
          />
        )}

        <Button onClick={handleEdit}>Edit</Button>

        <Button onClick={handleDelete}>Delete</Button>
      </div>

      {isEdditing ? (
        <div className="card__form">
          <FormTodo task={{ id, title, description, completed, disabled, deadline, createdAt }} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
