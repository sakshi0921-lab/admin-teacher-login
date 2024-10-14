"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validCredentials = {
    admin: { username: "admin", password: "password123" },
    faculty: { username: "faculty", password: "teach123" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === validCredentials.admin.username && password === validCredentials.admin.password) {
      router.push("/admin/dashboard"); // Redirect to Admin Dashboard
    } else if (username === validCredentials.faculty.username && password === validCredentials.faculty.password) {
      router.push("/faculty/dashboard"); // Redirect to Faculty Dashboard
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "460px",
        marginRight: "10%",
        backgroundColor: "#352e2ec7",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "3rem",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "380px",
          width: "90%",
          marginLeft: "-30px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h2 style={{ marginBottom: "2rem", color: "#333", fontSize: "1.8rem", fontWeight: "bold" }}>Login</h2>
      
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1.5rem",
            width: "100%",
          }}
        >
          <label
            htmlFor="username"
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
            style={{
              padding: "0.75rem",
              color: "black",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.3s",
              width: "100%",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #4facfe")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1.5rem",
            width: "100%",
          }}
        >
          <label
            htmlFor="password"
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight: "500",
              color: "#555",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              color: "black",
              fontSize: "1rem",
              outline: "none",
              transition: "border 0.3s",
              width: "100%",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #4facfe")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
        </div>

        {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

        <button
          type="submit"
          style={{
            backgroundColor: "#4facfe",
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            transition: "background-color 0.3s",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#00f2fe")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4facfe")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
