import { useTodo } from 'context';
import { FC } from 'react';
import { Task } from 'types';
import { Button, Typography } from '..';

interface Props {
  props: Task;
  onEdit?: () => void;
}

export const TodoCard: FC<Props> = ({ props, onEdit }) => {
  const { title, completed, disabled, id, description } = props;

  const { dispatch } = useTodo();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <div className={`card ${completed ? 'card--completed' : ''} card--${disabled ? 'disabled' : 'active'}`}>
      <Typography type="h6">{title}</Typography>

      <Typography type="p">{description}</Typography>

      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
