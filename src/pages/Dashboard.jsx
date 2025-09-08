import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ user, meetings, logout, editMeeting, deleteMeeting, completeMeeting }) {
  if (!user) return null;

  const upcoming = meetings.filter((m) => !m.completed);
  const completed = meetings.filter((m) => m.completed);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f9fafb", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Welcome, {user.name}</h2>

        {/* Actions */}
        <Link
          to="/create"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          + New Meeting
        </Link>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Upcoming meetings */}
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Upcoming Meetings</h3>
          {upcoming.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No upcoming meetings</p>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {upcoming.map((m) => (
                <div
                  key={m.id}
                  style={{
                    background: "#eff6ff",
                    padding: 16,
                    borderRadius: 12,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "#1e3a8a" }}>{m.title}</h4>
                  <p style={{ fontSize: 14, color: "#374151" }}>
                    {m.date} — {m.time}
                  </p>
                  <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button
                      onClick={() => {
                        const newTitle = prompt("Enter new meeting title:", m.title);
                        if (newTitle) editMeeting(m.id, newTitle);
                      }}
                      style={{
                        background: "#2563eb",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteMeeting(m.id)}
                      style={{
                        background: "#dc2626",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => completeMeeting(m.id)}
                      style={{
                        background: "#16a34a",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Mark Complete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Completed meetings */}
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Completed Meetings</h3>
          {completed.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No completed meetings yet</p>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {completed.map((m) => (
                <div
                  key={m.id}
                  style={{
                    background: "#f3f4f6",
                    padding: 16,
                    borderRadius: 12,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      textDecoration: "line-through",
                      color: "#374151",
                    }}
                  >
                    {m.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "#6b7280" }}>
                    {m.date} — {m.time}
                  </p>
                  <div style={{ marginTop: 10 }}>
                    <button
                      onClick={() => deleteMeeting(m.id)}
                      style={{
                        background: "#dc2626",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

            {/* Logout at bottom */}
      <div style={{ padding: "20px", borderTop: "1px solid #e5e7eb", display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={logout}
          style={{
            background: "#dc2626",
            color: "white",
            padding: "12px 16px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontWeight: 500,
            width: "15%",        // ✅ only 15% wide
            minWidth: "120px",   // ✅ ensures it’s not too tiny on small screens
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
