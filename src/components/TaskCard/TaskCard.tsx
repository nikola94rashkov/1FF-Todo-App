import { Button, Field, FormTodo, Typography } from 'components';
import { useTodo } from 'context';
import { FC, useState } from 'react';
import { Task } from 'types';

import './TaskCard.scss';

export const TodoCard: FC<Task> = (props) => {
  const { title, completed, disabled, id, description, deadline, createdAt } = props;

  const [toggleEditForm, setToggleEditForm] = useState<boolean>(false);

  const { dispatch } = useTodo();

  const onToggleEditForm = (value: boolean) => {
    setToggleEditForm(value);
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'DELETE_TASK':
        dispatch({ type: 'DELETE_TASK', payload: id });
        break;
      case 'TOGGLE_TASK_COMPLETE':
        dispatch({ type: 'TOGGLE_TASK_COMPLETE', payload: props });
        break;
      case 'EDIT_TASK':
        setToggleEditForm(true);
        dispatch({ type: 'EDIT_TASK', payload: props });
        break;
      default:
        console.log('Invalid action');
    }
  };

  const today = new Date().getTime();
  const isTaskExpiredOrDisabled = today > new Date(deadline).getTime() || disabled;

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
            onChange={() => handleAction('TOGGLE_TASK_COMPLETE')}
            type="checkbox"
            label={completed ? 'Uncomplete' : 'Complete'}
          />
        )}

        <Button onClick={() => handleAction('EDIT_TASK')}>Edit</Button>

        <Button onClick={() => handleAction('DELETE_TASK')}>Delete</Button>
      </div>

      {toggleEditForm ? (
        <div className="card__form">
          <FormTodo
            task={{ id, title, description, completed, disabled, deadline, createdAt }}
            onToggleEditForm={onToggleEditForm}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
