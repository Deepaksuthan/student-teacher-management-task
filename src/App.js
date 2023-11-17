import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddTeacher from "./components/teachers/addteacher";
import { useState } from "react";
import { studentData, teacherData } from "./data/data";
import NoPage from "./components/NoPage";
import AddNewStudent from "./components/student/addstudent";
import EditUser from "./components/student/editStudent";
import EditTeacher from "./components/teachers/editteacher";
import ViewTeacher from "./components/teachers/viewteacher";
import UserDetails from "./components/User";
import ViewStudent from "./components/student/viewstudent";
import TeachersPage from "./components/teachers/teachers";
import StudentsPage from "./components/student/student";

function App() {
  const [teacher, setTeacher] = useState(teacherData);
  const [student, setStudent] = useState(studentData);

  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<UserDetails />} />
        <Route
          path={"/students"}
          element={<StudentsPage student={student} setStudent={setStudent} />}
        />

        <Route
          path={"/addstudent"}
          element={<AddNewStudent student={student} setStudent={setStudent} />}
        />

        <Route
          path={"/editstudent/:id"}
          element={<EditUser student={student} setStudent={setStudent} />}
        />

        <Route
          path={"/view/student/:id"}
          element={<ViewStudent student={student} setStudent={setStudent} />}
        />

        <Route
          path={"/teachers"}
          element={<TeachersPage teacher={teacher} setTeacher={setTeacher} />}
        />

        <Route
          path={"/addteacher"}
          element={<AddTeacher teacher={teacher} setTeacher={setTeacher} />}
        />

        <Route
          path={"/editteacher/:id"}
          element={<EditTeacher teacher={teacher} setTeacher={setTeacher} />}
        />

        <Route
          path={"/viewteacher/:id"}
          element={<ViewTeacher teacher={teacher} setTeacher={setTeacher} />}
        />

        <Route path={"**"} element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
