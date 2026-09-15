import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Quik Links</p>
      <Link to="/">Dashboard</Link>
      <Link to="/students">Students</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/settings">Settings</Link>
    </aside>
  );
}

export default Sidebar;