import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addTodo,
  markComplete,
  remove,
  markAllIncomplete,
  deleteAll,
} from "../../../redux/slices/todo";
interface Props {}

const Todo = (props: Props) => {
  const [indexValue, setIndexValue] = useState(0);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todo);
  console.log("🚀 ~ file: Todo.tsx:11 ~ Todo ~ todos:", todo.todos);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodos = (e) => {
    dispatch(addTodo({ value, isCompleted: false }));
    setValue("");
  };
  const handleRemove = (currentIndex) => {
    const removedList = todo.todos.filter(
      (task, index) => index !== currentIndex
    );

    dispatch(remove(removedList));
  };

  const handleMarkComplete = (clickedIndex) => {
    let cloneTodo = todo.todos.map((todo, index) => {
      if (clickedIndex == index) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    console.log("🚀 ~ file: Todo.tsx:28 ~ cloneTodo ~ cloneTodo:", cloneTodo);

    dispatch(markComplete(cloneTodo));
  };
  const handleMarkAllComplete = () => {
    const completeTodos = todo.todos.map((todo) => ({
      ...todo,
      isCompleted: true,
    }));
    dispatch(markComplete(completeTodos));
  };

  const handleAllInComplete = () => {
    const inCompleteTodos = todo.todos.map((todo) => ({
      ...todo,
      isCompleted: false,
    }));
    dispatch(markAllIncomplete(inCompleteTodos));
  };
  const handleDelete = () => {
    dispatch(deleteAll());
  };
  return (
    <div>
      <div className="todo bg-cyan-50 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold">Todo list</h1>
        <input
          type="text"
          onChange={handleChange}
          className="todo-input"
          value={value}
        />

        <button className="add bg-red-400 px-6 m-2" onClick={handleAddTodos}>
          ADD TODO
        </button>
        <div className="flex">
          <button
            type="Button"
            className="add bg-red-400 px-6 m-2"
            onClick={handleMarkAllComplete}
          >
            Mark all Complete
          </button>
          <button
            type="Button"
            className="add bg-red-400 px-6 m-2"
            onClick={handleAllInComplete}
          >
            Mark All Incomplete
          </button>

          <button
            type="Button"
            className="add bg-red-400 px-6 m-2"
            onClick={handleDelete}
          >
            Delete all
          </button>
        </div>
      </div>
      {todo.todos.map((todo, index) => {
        return (
          <div className="flex flex-row">
            <li
              onClick={() => handleMarkComplete(index)}
              key={index}
              className={todo.isCompleted ? "text-green-500" : "text-red-500"}
            >
              {todo.value}
            </li>
            <button
              className="mx-8 text-lg"
              onClick={() => handleRemove(index)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
