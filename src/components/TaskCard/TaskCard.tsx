import { Button, Field, Typography } from 'components';
import { useTodo } from 'context';
import { FC } from 'react';
import { Task } from 'types';

import './TaskCard.scss';
interface Props {
  props: Task;
  onEdit?: () => void;
}

export const TodoCard: FC<Props> = ({ props, onEdit }) => {
  const { title, completed, disabled, id, description, deadline } = props;

  const { dispatch } = useTodo();

  const isTaskExpiredOrDisabled = new Date().getTime() > new Date(deadline).getTime() || disabled;

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleComplete = () => {
    dispatch({ type: 'TOGGLE_TASK_COMPLETE', payload: props });
  };

  return (
    <div className={`card card--${completed ? 'completed' : 'uncompleted'} card--${disabled ? 'disabled' : 'active'}`}>
      <div className="card__head">
        <Typography type="h6">{title}</Typography>

        <Typography type="p">{description}</Typography>
      </div>

      <div className="card__actions">
        {isTaskExpiredOrDisabled ? (
          <Typography type="p">task is expired or disabled</Typography>
        ) : (
          <Field
            id={String(id)}
            checked={completed}
            onChange={toggleComplete}
            type="checkbox"
            label={completed ? 'Uncomplete' : 'Complete'}
          />
        )}

        <Button onClick={onEdit}>Edit</Button>

        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};
