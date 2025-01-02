import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium dark: text-slate-400">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          className="text-sm font-medium text-white bg-red-600 p-2 rounded-md hover:bg-red-900 hover:underline"
          onClick={() => deleteAllCompleted()}
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}
