import { TodoCard } from 'components';
import { useTodo } from 'context';

export const TodoList = () => {
  const { state } = useTodo();

  console.log('todoList', state);

  return (
    <section>
      <div className="shell">{state?.tasks.map((item) => <TodoCard key={item.id} props={item} />)}</div>
    </section>
  );
};
