import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center">
      <label className="flex-grow border rounded-s-md p-2 border-gray-400 bg-white hover:bg-slate-200 dark:bg-slate-400 dark:hover:bg-slate-800">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-135"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : ""
          } p-2 dark:text-slate-900`}
        >
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="flex text-white w-16 items-center p-2 bg-red-600 hover:bg-red-900 rounded-e-md"
      >
        Delete <Trash2 />
      </button>
    </div>
  );
}
