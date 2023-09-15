import { TodoList } from 'components/TodoList';
import { TodoProvider } from './context';
import { Home } from './layouts';

export const App = () => {
  return (
    <TodoProvider>
      <Home />

      <TodoList />
    </TodoProvider>
  );
};
