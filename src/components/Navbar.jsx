import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" container mx-auto p-4 bg-green-400 flex justify-between">
      <div className="text-xl text-white font-bold">ToDo App</div>
      <div className="text-white text-xl font-bold">
        <Link to="/">Todos</Link>
        <Link className="ml-4" to="/addTodo">
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
