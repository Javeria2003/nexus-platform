import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">🚀 Nexus</h1>

        <nav className="space-y-4 text-gray-300">

          <Link to="/dashboard" className="nav-item block">
            Dashboard
          </Link>

          <Link to="/meetings" className="nav-item block">
            Meetings
          </Link>

          <Link to="/video" className="nav-item block">
            Video Calls
          </Link>

          <Link to="/documents" className="nav-item block">
            Documents
          </Link>

          <Link to="/payments" className="nav-item block">
            Payments
          </Link>

          <Link to="/admin" className="nav-item block">
            Admin Panel
          </Link>

        </nav>

        <div className="mt-10 text-sm text-gray-400">
          Role: {user?.role}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Welcome, {user?.name} 👋
          </h1>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>

        {/* ROLE TEXT */}
        <p className="text-gray-400 mt-2">
          {user?.role === "investor"
            ? "Explore startups and schedule meetings"
            : "Connect with investors and pitch your ideas"}
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <Link to="/meetings" className="grid-card">
            <h2 className="text-lg font-semibold">📅 Meetings</h2>
            <p className="text-gray-400 mt-2">Manage schedules</p>
          </Link>

          <Link to="/documents" className="grid-card">
            <h2 className="text-lg font-semibold">📄 Documents</h2>
            <p className="text-gray-400 mt-2">Upload & review</p>
          </Link>

          <Link to="/payments" className="grid-card">
            <h2 className="text-lg font-semibold">💰 Wallet</h2>
            <p className="text-gray-400 mt-2">Track transactions</p>
          </Link>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;