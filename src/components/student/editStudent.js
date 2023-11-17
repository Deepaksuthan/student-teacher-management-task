import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/Base";

export default function EditUser({ student, setStudent }) {
  const history = useNavigate();
  const { id } = useParams();

  const [formState, setFormState] = useState({
    id: "",
    name: "",
    std: "",
    attendance: "",
  });

  useEffect(() => {
    const selectStudent = student.find((data) => data.id === id);
    setFormState(selectStudent);
  }, [id, student]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const updateStudent = () => {
    const editIndex = student.findIndex((per) => per.id === id);
    student[editIndex] = formState;
    setStudent([...student]);
    history("/students");
  };

  return (
    <BaseDefault title={"Edit Student Details"} styles={"title"}>
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
        <Button onClick={updateStudent}>Submit</Button>
      </div>
    </BaseDefault>
  );
}
