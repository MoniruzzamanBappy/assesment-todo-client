import React from "react";

const CompletedToDo = ({ item, index }) => {
  const { name, about, isComplete } = item;
  return (
    <div>
      {isComplete ? (
        <tr>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{about.slice(0, 30)}</td>
        </tr>
      ) : null}
    </div>
  );
};

export default CompletedToDo;
