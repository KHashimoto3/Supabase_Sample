import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3> Supabase Todo App</h3>
      <form>
        <input
          type="text"
          className="shadow-md p-1 outline-none"
          placeholder="Add a new todo"
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-1g bg-green-600">
          Add
        </button>
      </form>
      <TodoList />
    </section>
  );
};

export default TodoApp;
