import { useSelector } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import AddForm from "./AddForm";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

const Todo = () => {
  const { todos } = useSelector((state) => state.todo);
  todos.map((todo) => console.log(todo));
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const markHandler = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
      <h1>Todo Lists</h1>
      <h6>
        <u>Redux ToolKit State Management</u>
      </h6>
      <h6>(add your daily todo list here...)</h6>
      <AddForm />
      <ListGroup>
        {todos.map((todo) => (
          <div className="flex-div">
            <input type="checkbox" onClick={() => markHandler(todo.id)} />
            <ListGroup.Item
              className="todo-list"
              key={todo.id}
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </ListGroup.Item>
            <FaTrash
              className="delete"
              onClick={() => deleteHandler(todo.id)}
            />
          </div>
        ))}
      </ListGroup>
    </>
  );
};

export default Todo;
