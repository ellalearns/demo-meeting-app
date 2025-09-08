import React from "react";

export default function MeetingCard({ meeting }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 12, borderRadius: 10, marginBottom: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
      <div style={{ fontWeight: 600 }}>{meeting.title}</div>
      <div>{meeting.date} at {meeting.time}</div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>Status: {meeting.outcome}</div>
    </div>
  );
}
