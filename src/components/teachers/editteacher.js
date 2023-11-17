import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BaseDefault from "../../core/Base";

export default function EditTeacher({ teacher, setTeacher }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    subject: "",
    performance: "",
  });

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const selectTeacher = teacher.find((per) => per.id === id);
    setFormData(selectTeacher);
  }, [id, teacher]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedTeacher = teacher.map((t) =>
      t.id === id ? { ...formData } : t
    );
    setTeacher(updatedTeacher);
    history("/teacher");
  };

  return (
    <BaseDefault title={"Edit a Teacher Details"} styles={"title"}>
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
          label="Class"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="performance"
          onChange={handleInputChange}
          type="text"
          value={formData.performance}
          label="Attendance"
          variant="outlined"
        />
        <Button onClick={handleUpdate}>Submit</Button>
      </div>
    </BaseDefault>
  );
}
