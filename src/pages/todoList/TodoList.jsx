import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todosReducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdate = (id, isCompleted) => {
    dispatch(updateTodo({ id, isCompleted: !isCompleted }));
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-xl font-bold">TodoList</h1>
      </div>
      <div>
        {todos.length === 0 ? (
          <div className="w-full flex flex-col justify-center items-center m-10 text-2xl font-bold">
            <h1>Please add Your todo List</h1>
          </div>
        ) : (
          <div className="m-10">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>SL. </th>
                    <th>ToDos</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {todos.map((todo, index) => (
                    <tr className="text-center" key={index}>
                      <th>{index + 1}</th>
                      <td
                        className={
                          todo.isCompleted ? "line-through text-red-600" : ""
                        }
                      >
                        {todo.todo}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(todo.id)}
                          className="bg-[#E7A500] px-2 py-1 rounded-md"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            handleUpdate(todo.id, todo.isCompleted)
                          }
                          className="ml-8 bg-[#00A96E] px-2 py-1 rounded-md"
                        >
                          {!todo.isCompleted ? "Completed" : "InCompleted"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
