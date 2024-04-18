import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="container mx-auto p-4">
      TodoList
      <div>
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
                  <td>{todo.todo}</td>
                  <td>
                    <button className="bg-[#E7A500] px-2 py-1 rounded-md">
                      Delete
                    </button>
                    <button className="ml-8 bg-[#00A96E] px-2 py-1 rounded-md">
                      Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
