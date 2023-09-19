import { TodoCard } from 'components';
import { useTodo } from 'context';

export const TodoList = () => {
  const { state } = useTodo();

  return (
    <section>
      <div className="shell">{state?.tasks.map((item) => <TodoCard key={item.id} {...item} />)}</div>
    </section>
  );
};
