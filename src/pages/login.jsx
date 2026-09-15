import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim() === "admin" && password.trim() === "1234") {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;