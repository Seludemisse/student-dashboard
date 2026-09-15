import { useState } from "react";
import StudentCard from "../components/StudentCard";
import useStudents from "../hooks/useStudents";
import { isValidName } from "../utils/validators";


function Students() {
  const { students, addStudent, editStudent, deleteStudent } = useStudents();
  const [searchText, setSearchText] = useState("");
  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filterCourse, setFilterCourse]=useState("All");

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidName(newName)) return;

    if (editingId === null) {
      addStudent({ name: newName, course: newCourse }).then(resetForm);
    } else {
      editStudent(editingId, { name: newName, course: newCourse }).then(resetForm);
    }
  }

  function startEditing(student) {
    setEditingId(student.id);
    setNewName(student.name);
    setNewCourse(student.course);
  }

  function resetForm() {
    setNewName("");
    setNewCourse("");
    setEditingId(null);
  }

  const filteredStudents = students
  .filter(student =>student.name.toLowerCase().includes(searchText.toLowerCase()))
  .filter(student => filterCourse === "All" || student.course === filterCourse);

  const courseOptions = ["All", ...new Set(students.map(student => student.course))];
  return (
    <div>
      <h2>Students</h2>

      <input
        type="text"
        placeholder="Search students..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <select
  value={filterCourse}
  onChange={(event) => setFilterCourse(event.target.value)}
>
  {courseOptions.map(course => (
    <option key={course} value={course}>{course}</option>
  ))}
</select>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={newCourse}
          onChange={(event) => setNewCourse(event.target.value)}
        />
        <button type="submit">
          {editingId === null ? "Add Student" : "Update Student"}
        </button>
        {editingId !== null && (
          <button type="button" onClick={resetForm}>Cancel</button>
        )}
      </form>

      {filteredStudents.map(student => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          course={student.course}
          onDelete={deleteStudent}
          onEdit={() => startEditing(student)}
        />
      ))}
    </div>
  );
}

export default Students;