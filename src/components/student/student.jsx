import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BaseDefault from "../../core/Base";

export default function StudentsPage({ student, setStudent }) {
  const history = useNavigate();

  const deleteStudent = (id) => {
    const updatedList = student.filter((data) => data.id !== id);
    setStudent(updatedList);
  };

  return (
    <BaseDefault title="Students" styles="title">
      <div className="add-user">
        <Button onClick={() => history("/addstudent")}>Add Student</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map(({ id, name, std, marks, attendance }, idx) => (
            <tr key={idx}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{std}</td>
              <td>{attendance}</td>
              <td className="btn-grp">
                <Button onClick={() => history(`/editstudent/${id}`)}>
                  Edit
                </Button>
                <Button onClick={() => deleteStudent(id)}>Delete</Button>
                <Button onClick={() => history(`/viewstudent/${idx}`)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BaseDefault>
  );
}
