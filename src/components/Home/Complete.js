import React from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import CompletedToDo from './CompletedToDo';

const Complete = () => {
  const [user] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("todo", () =>
    fetch(
      `https://shrouded-sands-59910.herokuapp.com/todo?email=${user.email}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h1 className="text-center">All Todo's</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Todo Name</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <CompletedToDo
              refetch={refetch}
              index={index}
              key={item._id}
              item={item}
            ></CompletedToDo>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Complete;
