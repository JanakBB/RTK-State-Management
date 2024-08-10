import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddForm = () => {
  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler} className="form-flex">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>Add Task</button>
      </form>
      <hr />
    </>
  );
};

export default AddForm;
