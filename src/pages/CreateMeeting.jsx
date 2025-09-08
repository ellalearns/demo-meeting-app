import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateMeeting({ addMeeting }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeeting({ title, date, time, outcome: "Scheduled" });
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <form onSubmit={handleSubmit} style={{ background: "white", padding: 24, borderRadius: 12, width: 380, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Create Meeting</h2>
        <input
          type="text"
          placeholder="Meeting Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ border: "1px solid #d1d5db", padding: 8, borderRadius: 6, width: "100%", marginBottom: 8 }}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ border: "1px solid #d1d5db", padding: 8, borderRadius: 6, width: "100%", marginBottom: 8 }}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ border: "1px solid #d1d5db", padding: 8, borderRadius: 6, width: "100%", marginBottom: 12 }}
          required
        />
        <button type="submit" style={{ background: "#2563eb", color: "white", padding: "10px 12px", borderRadius: 8, width: "100%", border: "none" }}>
          Save
        </button>
      </form>
    </div>
  );
}
