import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteCompletedTodos } = useTodos();
  const [ darkMode, setDarkMode ] = useState(true);

  function toggleDarkMode () {
    setDarkMode(!darkMode);
  }

  return (
    <main className={`py-10 h-screen space-y-5 overflow-y-auto ${darkMode && "dark bg-black"}`}>
      <DarkModeToggle  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="max-w-xl mx-auto bg-slate-100 rounded-md p-5 dark:bg-slate-900 dark:text-slate-200">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteCompletedTodos} />
    </main>
  );
}

export default App;
