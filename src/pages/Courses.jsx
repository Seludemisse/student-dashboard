import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    { id: 1, title: "React Development" },
    { id: 2, title: "JavaScript Fundamentals" },
    { id: 3, title: "Python Basics" },
  ];

  return (
    <div>
      <h2>Courses</h2>
      {courses.map(course => (
        <CourseCard key={course.id} title={course.title} />
      ))}
    </div>
  );
}

export default Courses;