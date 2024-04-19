import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../redux/todosReducer";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    if (todo.length > 0) {
      dispatch(addTodo({ id: uuidv4(), todo, isCompleted: false }));
      navigate("/");
    }
    setTodo("");
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center ">
          <div className="w-[80%] bg-zinc-300 p-4 ">
            <h1 className="text-center my-5">Add Task</h1>
            <form
              className="flex flex-col justify-center items-center "
              onSubmit={handleSubmit}
            >
              <input
                className="w-[40%] focus:outline-none px-2 py-1 rounded-md border border-blue-200"
                value={todo}
                type="text"
                onChange={(e) => setTodo(e.target.value)}
              />
              <button
                className="bg-blue-500 px-4 py-2 my-3 rounded-lg text-white hover:bg-blue-600 font-bold"
                type="submit"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
