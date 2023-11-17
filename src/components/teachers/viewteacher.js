import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/Base";

export default function ViewTeacher({ teacher }) {
  const { id } = useParams();
  const selectedTeacher = teacher[id];
  const history = useNavigate();

  if (!Number.isInteger(Number(id)) || id < 0 || id >= teacher.length) {
    return (
      <BaseDefault>
        <div className="card-body">
          <p>Invalid Teacher ID!</p>
          <Button onClick={() => history("/teacher")} variant="primary">
            Back
          </Button>
        </div>
      </BaseDefault>
    );
  }

  return (
    <BaseDefault>
      <div className="card-body">
        <div className="card">
          <h2>{selectedTeacher.name}</h2>
          <p>Subject: {selectedTeacher.subject}</p>
          <p>Performance: {selectedTeacher.performance} </p>
          <Button onClick={() => history("/teacher")} variant="primary">
            Back
          </Button>
        </div>
      </div>
    </BaseDefault>
  );
}
