import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateMeeting from "./pages/CreateMeeting";
import { users, mockMeetings } from "./data";

function ProtectedRoute({ authed, children }) {
  return authed ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [meetings, setMeetings] = useState(mockMeetings);

  // 🔑 Handle login
  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) setCurrentUser(user);
    return !!user;
  };

  const logout = () => setCurrentUser(null);

  // ➕ Create
  const addMeeting = (meeting) => {
    setMeetings((prev) => [...prev, { id: prev.length + 1, ...meeting }]);
  };

  // ✏️ Edit
  const editMeeting = (id, newTitle) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, title: newTitle } : m
      )
    );
  };


  // ❌ Delete
  const deleteMeeting = (id) => {
    setMeetings((prev) => prev.filter((m) => m.id !== id));
  };

  // ✅ Complete meeting
  const completeMeeting = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, completed: true } : m
      )
    );
  };


  const authed = !!currentUser;

  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login login={login} />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute authed={authed}>
              <Dashboard
                user={currentUser}
                meetings={meetings}
                logout={logout}
                editMeeting={editMeeting}
                deleteMeeting={deleteMeeting}
                completeMeeting={completeMeeting}
              />

            </ProtectedRoute>
          }
        />

        {/* Create meeting */}
        <Route
          path="/create"
          element={
            <ProtectedRoute authed={authed}>
              <CreateMeeting addMeeting={addMeeting} />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route
          path="*"
          element={<Navigate to={authed ? "/" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}
