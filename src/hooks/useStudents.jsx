import { useState, useEffect } from "react";
import { getStudents, createStudent, removeStudent, updateStudent } from "../services/studentService";

function useStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then(data => setStudents(data));
  }, []);

  function addStudent(student) {
    return createStudent(student).then(createdStudent => {
      setStudents(prev => [...prev, createdStudent]);
    });
  }

  function editStudent(id, updatedData) {
    return updateStudent(id, updatedData).then(updatedStudent => {
      setStudents(prev => prev.map(student =>
        student.id === id ? updatedStudent : student
      ));
    });
  }

  function deleteStudent(id) {
    return removeStudent(id).then(() => {
      setStudents(prev => prev.filter(student => student.id !== id));
    });
  }

  return { students, addStudent, editStudent, deleteStudent };
}

export default useStudents;