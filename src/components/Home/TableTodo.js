import React from "react";
import { toast } from "react-toastify";

const TableTodo = ({ item, index, refetch }) => {
  const { name, about, isComplete, _id } = item;
  const handleCompleted = (_id) => {
    const url = `http://localhost:5000/todo/${_id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isComplete: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Completed a todo");
        refetch();
      });
  };
  const handleDelete = (_id) => {
    const url = `http://localhost:5000/todo/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Deleted a todo");
        refetch();
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td className={isComplete ? "text-decoration-line-through" : ""}>
        {name}
      </td>
      <td className={isComplete ? "text-decoration-line-through" : ""}>
        {about.slice(0, 30)}
      </td>
      <td>
        <button
          onClick={() => handleCompleted(_id)}
          disabled={isComplete}
          className="btn mx-auto btn-primary"
        >
          Done
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn mx-auto btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableTodo;
