import React, { useState } from "react";
import "./App.css";
import FormToDo from "./FormToDo";
import ToDoList from "./ToDoList";
import { Card } from "react-bootstrap";
export default function ToDo() {
  const [List, setList] = useState([
    { id: 1, items: "Learn React", isDone: false },
    { id: 2, items: "Learn JS", isDone: false },
    { id: 3, items: "Learn AI", isDone: false },
  ]);
  const getList = (val) => {
    const valu = { id: List.length + 1, items: val, isDone: false };
    setList([...List, valu]);
  };
  const deleteList = (list_id) => {
    console.log(list_id);
    const deletevalue = List.filter((x) => x.id !== list_id);
    console.log(deletevalue);
    setList(deletevalue);
  };
  const undoList = (listId) => {
    console.log(listId);
    const items = List.findIndex((x) => x.id === listId);
    if (items !== -1) {
      List[items].isDone = !List[items].isDone;
    }
    setList([...List]);
  };
  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">ToDo List</h1>
          <FormToDo list={getList} />

          {List.length > 0 &&
            List.map((x) => (
              <Card key={x.id} className="mb-2">
                <Card.Body>
                  <ToDoList
                    list={x}
                    deleteList={deleteList}
                    undoList={undoList}
                  />
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
