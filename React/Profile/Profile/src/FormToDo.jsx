import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function FormToDo({ list }) {
  const [values, setValues] = useState("");
  const Result = (e) => {
    e.preventDefault();
    if (values.trim() !== "") {
      list(values);
    }
    setValues("");
  };
  return (
    <>
      <div>
        <Form
          onSubmit={(e) => {
            Result(e);
          }}
        >
          <Form.Group>
            <Form.Label>Add To Do List</Form.Label>
            <Form.Control
              type="text"
              className="input"
              placeholder="Add new Items"
              value={values}
              onChange={(e) => setValues(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="buttons mt-4 mb-4">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default FormToDo;
