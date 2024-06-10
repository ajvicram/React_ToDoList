import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

export default function ToDoList({ list, deleteList, undoList }) {
  return (
    <>
      <div className="todo" key={list.id}>
        <div className="todoList">
          <span className={list.isDone ? "strikeOut" : ""}>{list.items}</span>
          <div className="todo_button">
            <Button onClick={() => undoList(list.id)}>
              {list.isDone ? "UnDone" : "Done"}
            </Button>
            <Button variant="danger" onClick={() => deleteList(list.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
