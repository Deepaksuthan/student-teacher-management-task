import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/Base";

export default function TeachersPage({ teacher, setTeacher }) {
  const history = useNavigate();

  const deleteTeacher = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      const updatedList = teacher.filter((data) => data.id !== id);
      setTeacher(updatedList);
    }
  };

  return (
    <BaseDefault title="Teachers" styles="title">
      <div className="add-user">
        <Button onClick={() => history("/addteacher")}>Add Teachers</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Performance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teacher.map(({ id, name, subject, performance }, index) => (
            <tr key={`teacher-${id}`}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{subject}</td>
              <td>{performance}</td>
              <td className="btn-grp">
                <Button onClick={() => history(`/edit/teacher/${id}`)}>Edit</Button>
                <Button onClick={() => history(`/view/teacher/${index}`)}>View</Button>
                <Button onClick={() => deleteTeacher(id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BaseDefault>
  );
}
