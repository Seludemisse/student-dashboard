import {useState} from "react";
import{ Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Login from "./pages/login";
import Settings from "./pages/Settings";

function App(){
  const [isLoggedIn, setIsLoggedIn] =useState(false);

  if (!isLoggedIn){
    return <Login onLogin={
      () => setIsLoggedIn(true)} />;
  }
  return (
  <div>
      <h1>Student Dashboard</h1>

      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
        </main>
  </div>
  </div>
  );
}

export default App;
