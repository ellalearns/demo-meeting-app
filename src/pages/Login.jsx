import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(email, password);
    if (!ok) {
      setError("Invalid credentials");
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", background: "#f3f4f6" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: 32,
          borderRadius: 16,
          width: 340,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, textAlign: "center", color: "#111827" }}>
          Sign In
        </h2>
        {error && <p style={{ color: "#dc2626", marginBottom: 12, textAlign: "center" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: "1px solid #d1d5db",
            padding: 10,
            borderRadius: 8,
            width: "100%",
            marginBottom: 12,
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: "1px solid #d1d5db",
            padding: 10,
            borderRadius: 8,
            width: "100%",
            marginBottom: 16,
          }}
          required
        />
        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "10px 12px",
            borderRadius: 8,
            width: "100%",
            border: "none",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
