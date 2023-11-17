import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/Base";

export default function ViewStudent({ student }) {
  const history = useNavigate();
  const { id } = useParams();
  const selectedStudent = student[id] || {};

  return (
    <BaseDefault>
      <div className="card-body">
        <div className="card">
          <h2>{selectedStudent.name}</h2>
          <p>Class: {selectedStudent.std}</p>
          <p>Attendance: {selectedStudent.attendance}</p>
          <Button onClick={() => history("/student")}>Back</Button>
        </div>
      </div>
    </BaseDefault>
  );
}
