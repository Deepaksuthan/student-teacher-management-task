import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/Base";

export default function AddNewStudent({ student, setStudent }) {
  const history = useNavigate();

  const [formState, setFormState] = useState({
    id: "",
    name: "",
    std: "",
    attendance: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addStudent = (event) => {
    event.preventDefault();
    setStudent([...student, formState]);
    history("/student");
  };

  return (
    <BaseDefault title={"Add a New Student"} styles={"title"}>
      <div className="add-label">
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          type="text"
          value={formState.id}
          label="Id"
          variant="outlined"
          name="id"
        />
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          type="text"
          value={formState.name}
          label="Name"
          variant="outlined"
          name="name"
        />
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          type="text"
          value={formState.std}
          label="Class"
          variant="outlined"
          name="std"
        />
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          type="text"
          value={formState.attendance}
          label="Attendance"
          variant="outlined"
          name="attendance"
        />
        <Button onClick={addStudent}>Submit</Button>
      </div>
    </BaseDefault>
  );
}
