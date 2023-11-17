import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BaseDefault from "../../core/Base";

export default function AddTeacher({ teacher, setTeacher }) {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    subject: "",
    performance: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addNewTeacher = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.subject) {
      alert("Name and Subject are required");
      return;
    }
    const newTeacher = { ...formData };
    setTeacher([...teacher, newTeacher]);
    history("/teacher");
  };

  return (
    <BaseDefault title="Add a New Teacher" styles="title">
      <div className="add-label">
        <TextField
          id="outlined-basic"
          name="id"
          onChange={handleInputChange}
          type="text"
          value={formData.id}
          label="Id"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="name"
          onChange={handleInputChange}
          type="text"
          value={formData.name}
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="subject"
          onChange={handleInputChange}
          type="text"
          value={formData.subject}
          label="Subject"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="performance"
          onChange={handleInputChange}
          type="text"
          value={formData.performance}
          label="Performance"
          variant="outlined"
        />
        <Button onClick={addNewTeacher}>Submit</Button>
      </div>
    </BaseDefault>
  );
}
