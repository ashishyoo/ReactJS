import { useEffect, useState } from "react";

interface ITodo {
  todo: string;
  createdAt: string;
}

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo: ITodo = {
        todo: input,
        createdAt: new Date().toLocaleString(),
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput("");
    }
  };

  const handleRemoveTodo = (removeId: string) => {
    const filteredTodos = todos.filter(
      ({ createdAt }) => createdAt !== removeId
    );

    setTodos(filteredTodos);
  };

  const handleUpdateTodo = (updateId: string) => {
    const todoToEdit = todos.find(({ createdAt }) => createdAt === updateId);
    if (todoToEdit) {
      setEditId(updateId);
      setEditValue(todoToEdit.todo);
    }
  };

  const handleSave = (updateId: string) => {
    if (editValue.trim()) {
      const updatedTodos = todos.map((todo) =>
        todo.createdAt === updateId ? { ...todo, todo: editValue } : todo
      );

      setTodos(updatedTodos);
      setEditId("");
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditId("");
    setEditValue("");
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter todo.."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAddTodo}>Add todo</button>

      <ul>
        {todos.map(({ todo, createdAt }) =>
          editId === createdAt ? (
            <li key={createdAt}>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={() => handleSave(createdAt)}>Save</button>
            </li>
          ) : (
            <li key={createdAt}>
              <span>{todo}</span>
              <button onClick={() => handleUpdateTodo(createdAt)}>
                Update
              </button>
              <button onClick={() => handleRemoveTodo(createdAt)}>
                Remove
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Todo;
